import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "**/schema.graphql",
  emitLegacyCommonJSImports: false,
  generates: {
    "src/types": defineConfig({
      resolverGeneration: "disabled",
      mergeSchema: false,
    }),
  },
};
export default config;
