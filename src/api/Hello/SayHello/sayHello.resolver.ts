import { Greeting, SayHelloQueryArguments,Status } from "../../../fresh-types/graphql"

export default {
    Query: {
        sayHello: (_: any, args: SayHelloQueryArguments): Greeting => {
            console.log(_, args);
            return {
                value: `Hello ${args.name}`,
                error: false,
                status:{
                    name:'very good'
                }
            }
        }
    }
}



