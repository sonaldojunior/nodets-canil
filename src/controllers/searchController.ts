import { Request, Response} from 'express';
import{ pet } from '../model/pet';
import{ createMenuObject } from '../helpers/createMenuObeject';

export const search = (req: Request, res:Response)=>{
    let query: string = req.query.q as string;

    if(!query){
        res.redirect('/')
        return;
    }

    let list = pet.getFromName(query)

    res.render('pages/page',{
        menu:createMenuObject(''),
        list,
        query
    });
}