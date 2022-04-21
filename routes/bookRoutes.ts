import { Router } from "express";
import { BookController } from "../controllers/bookController";
const bookRouter = Router();
const book = new BookController();

bookRouter.post('/new',book.newBook);

bookRouter.get('/view',book.viewBooks);

bookRouter.get('/delete/:id',book.deleteBook);

bookRouter.post('/viewOne',book.viewOneBook);

export default bookRouter;