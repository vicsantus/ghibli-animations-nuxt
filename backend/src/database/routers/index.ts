import { Router } from 'express';
import FilmsController from '../controllers/Films.controller';

const router = Router();

const filmsController = new FilmsController();

router.get('/', filmsController.getAll);
router.get('/images/:url', filmsController.getImage);

export default router;