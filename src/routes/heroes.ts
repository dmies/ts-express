import {Router, Request, Response, NextFunction} from 'express';
const Heroes: Hero[] = require('./heroesData');

export class HeroRouter {
    router: Router;

    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = Router();
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
    }

    /**
     * GET all Heroes.
     */
    public getAll = (request: Request, response: Response, next: NextFunction) => {
        response.send(Heroes);
    };

    /**
     * GET one hero by id
     */
    public getOne = (request: Request, response: Response, next: NextFunction) => {
        const query = parseInt(request.params.id);
        const hero = Heroes.find(hero => hero.id === query);
        if (hero) {
            response.status(200)
                .send({
                    message: 'Success',
                    status: response.status,
                    hero
                });
        } else {
            response.status(404)
                .send({
                    message: 'No hero found with the given id.',
                    status: response.status
                });
        }
    };

}
