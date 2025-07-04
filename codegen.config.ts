import { type CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [process.env.API_URL!]: {
      headers: {
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
      },
    },
  },
  documents: undefined,
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["@graphql-codegen/typescript"],
    },
    "./graphql.schema.json": {
      plugins: ["@graphql-codegen/introspection"],
    },
  },
};

export default config;
