import { ConnectionOptions } from "typeorm";

const options: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "uber",
    logging: ["query", "error"],
    synchronize: true,
    entities: ["entities/**/*.*"]
};

export default options