import { Router } from "express";
const fileRouter = Router();

fileRouter.get('/',(req,res)=>{
    res.render("pages/index");
})

fileRouter.get('/form',(req,res)=>{
    res.render("pages/form");
})

fileRouter.get('/result',(req,res)=>{
    res.render("pages/result")
})

export default fileRouter;