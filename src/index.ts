import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import createClient from "openapi-fetch";
import { paths } from "./generated/pc-types.js";
import { paths as actualPaths } from "./generated/actual-pc-types.js";
import { typeDefs } from "./types/typeDefs.generated.js";
import { MutationResolvers, QueryResolvers } from "./types/types.generated.js";

const client = createClient<paths>({ baseUrl: "http://localhost:3000" });
const actualClient = createClient<actualPaths>({
  baseUrl: "http://localhost:3000",
});

const response = actualClient.GET('/jobs/{jobNumber}/locations/{policyLocationId}', {params: {path: {jobNumber: '123456', policyLocationId: '123545'}}})

const resolvers: { Query: QueryResolvers; Mutation: MutationResolvers } = {
  Query: {
    getUser: async (_parent, { id }) => {
      const response = await client.GET("/users/{userId}", {
        params: { path: { userId: id } },
      });

      if (!response.data) throw new Error("No response");

      return {
        id: response.data.userId,
        name: response.data.fullName,
        age: response.data.age,
      };
    },
  },
  Mutation: {
    createUser: async (_parent, { createUserInput }) => {
      if (!createUserInput) throw new Error("No input");

      const { name, age } = createUserInput;

      const response = await client.POST("/users", {
        body: { fullName: name, age },
      });

      if (!response.data) throw new Error("No response");

      const { fullName, age: pcAge, userId } = response.data;

      return { name: fullName, age: pcAge, id: userId };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
