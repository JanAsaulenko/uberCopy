export const typeDefs = ["type Query {\n  hero: User!\n  sayHello: Greeting\n}\n\ntype User {\n  name: String!\n}\n\ntype Greeting {\n  value: String!\n  error: Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  hero: User;
  sayHello: Greeting | null;
}

export interface User {
  name: string;
}

export interface Greeting {
  value: string;
  error: boolean;
  status: Status;
}

export interface Status {
  name: string
}
export interface SayHelloQueryArguments {
  name: string
}