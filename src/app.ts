import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";
import schema from "./schema"

class App {
    public app: GraphQLServer;
    constructor() {
        this.app = new GraphQLServer({ schema });
        this.middleware();
    }
 
    
    public middleware = (): void => {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(logger("dev"));
    }
}

export default new App().app;

