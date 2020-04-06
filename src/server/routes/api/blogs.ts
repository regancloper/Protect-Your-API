import * as express from 'express';
import { RequestHandler, Request } from 'express';

import DB from '../../db';

const router = express.Router();

const isGuest: RequestHandler = (req: ReqUser, res, next) => {
    if (!req.user || (req.user && req.user.role !== 'guest')) {
        return res.sendStatus(401);
    } else {
        return next();
    }
}

router.get('/', async (req, res, next) => {
    try {
        let blogs = await DB.Blogs.getAll();
        res.send(blogs);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', isGuest, async (req, res, next) => {
    let id = parseInt(req.params.id);
    try {
        let blog = await DB.Blogs.getSingleBlog(id);
        res.send(blog);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

interface ReqUser extends Request {
    user: {
        role: string;
    };
}


export default router;