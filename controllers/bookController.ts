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
            res.render("pages/mensagens",{
                msg:"formulario enviado"
            })
        }catch(error){
            res.status(500).json({msg:`${error}`})
        }
    }

    async viewBooks(req:Request,res:Response){
        try{
            const books = await myDataSource.manager.find(Book);
            res.render("pages/books",{
                books:books
            })
        }catch(error){
            res.status(500).json({msg:`${error}`})
        }
    }

    async deleteBook(req:Request,res:Response){
        const {id} = req.params;
        try{
            const book = await myDataSource.manager.findOneBy(Book,{id:parseInt(id)});
            if(book){
                await myDataSource.manager.remove(book);
                res.redirect('/books/view')
            }else{
                res.render("pages/mensagens",{
                    msg:"Livro não existe"
                })
            }
        }catch(error){
            res.status(500).json({msg:`${error}`})
        }
    }
    async viewOneBook(req:Request,res:Response){
        const {title} = req.body
        try{
            const book = await myDataSource.manager.findOneBy(Book,{title:title});
            if(book){
                res.render("pages/viewBook",{
                    book:book
                })
            }else{
                res.render("pages/mensagens",{
                    msg:"Livro não existe"
                })
            }
        }catch(error){
            res.status(500).json({msg:`${error}`})
        }
    }
}