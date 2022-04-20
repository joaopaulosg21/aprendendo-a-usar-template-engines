import {config} from 'dotenv';
import {join} from 'path';
config({
    path: join(__dirname,'..','..','.env')
})

export default {
    port:process.env.PORT,
    host:process.env.HOST,
    dbPort:process.env.DBPORT,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
}