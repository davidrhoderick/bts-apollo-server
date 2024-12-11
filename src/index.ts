import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import createClient from "openapi-fetch";
import type { paths } from "./generated/guidewire-types.ts";
import { typeDefs } from "./generated/typeDefs.generated.js";
import { QueryResolvers, MutationResolvers } from "./generated/types.generated.js";

const client = createClient<paths>({ baseUrl: "http://localhost:3000" });

const getUser: QueryResolvers["getUser"] = async (_parent, { id }, _ctx) => {
  const response = await client.GET("/users/{id}", {
    params: { path: { id } },
  });

  if (!response.data) throw new Error("No response");

  return response.data;
};

const createUser: MutationResolvers["createUser"] = async (
  _parent,
  { createUserInput },
  _ctx
) => {
  if (!createUserInput) throw new Error("No input provided!");

  const { age, name } = createUserInput;

  const response = await client.POST("/users", {
    body: {
      age,
      name,
    },
  });

  if (!response.data) throw new Error("No response");

  return response.data;
};

const resolvers: { Query: QueryResolvers; Mutation: MutationResolvers } = {
  Query: { getUser },
  Mutation: {
    createUser,
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
