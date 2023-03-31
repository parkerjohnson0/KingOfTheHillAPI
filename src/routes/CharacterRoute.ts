import express from "express";
import {RouteLog} from "../utils/logger";
import {Route} from "../types/enums";
const router = express.Router();

router.use((req, res,next) =>{
    RouteLog(Route.Character, req.method);
    next();
})
   

router.get('/', (req, res) =>{
    res.send('<p>ALL CHARACTER OBJECTS</p>');
})

export default router;