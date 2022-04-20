import { DataSource } from "typeorm";
import config from "../config/config";
import { Book } from "./Entity/Book";
import "reflect-metadata"

const {host,dbPort,database,user,password} = config;

const myDataSource = new DataSource({
    type:"mysql",
    host:host,
    port:Number(dbPort),
    database:database,
    username:user,
    password:password,
    entities:[Book],
    synchronize:true
})

myDataSource.initialize().then(()=>console.log('Conectado')).catch((err)=>console.error(err));

export default myDataSource;