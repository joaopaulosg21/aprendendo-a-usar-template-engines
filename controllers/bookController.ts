import myDataSource from "../database/data-source";
import { Book } from "../database/Entity/Book";
import {Request,Response} from 'express';

export class BookController{
    
    async newBook(req:Request,res:Response){
        const {title,type} = req.body;
        try{
            await myDataSource.manager.insert(Book,{
                title:title,
                type:type
            })
            console.log(title + " " + type)
            res.redirect("/result")
        }catch(error){
            res.status(500).json({msg:`${error}`})
        }
    }
}