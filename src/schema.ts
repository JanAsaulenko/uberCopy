import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import path from "path";




const allTypes: GraphQLSchema[] = fileLoader(
    path.join(__dirname, "./api/**/*.graphql")
);

const allResolvers: any[] = fileLoader(
    path.join(__dirname, "./api/**/*.resolver.*")
);

const mergedTypes = mergeTypes(allTypes);
const mergedResolvers = mergeResolvers(allResolvers);
const schema = makeExecutableSchema({
    resolvers: mergedResolvers,
    typeDefs: mergedTypes
}
);

export default schema;