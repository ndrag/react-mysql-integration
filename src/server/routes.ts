import * as express from 'express';

import DB from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/skills', async (req, res) => {
    try {
        let skills = await DB.Skills.all();
        res.json(skills);
    } catch(e) {
        console.log(e); // Don't send the error to the client, just log it - it might have a password in it or something!
        res.sendStatus(500);
    }
}
)

export default router;