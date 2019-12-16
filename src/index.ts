import dotenv from "dotenv";
import { createConnection } from "typeorm";
import options from "./ormConfig";
import server from "./app";
import serverOptions from "./constants/constants";

dotenv.config();

const handleAppStart = () => console.log('Server is listening on port 4000');
const handleError = (error: Error) => console.error(error);
createConnection(options).then(() =>
    server.start(serverOptions, handleAppStart)
).catch(handleError)







