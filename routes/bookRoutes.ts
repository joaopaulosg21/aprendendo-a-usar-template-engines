import { Router } from "express";
import { BookController } from "../controllers/bookController";
const bookRouter = Router();
const book = new BookController();

bookRouter.post('/new',book.newBook);

export default bookRouter;