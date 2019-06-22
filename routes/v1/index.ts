import { Router } from 'express';
import { api } from './api';

const router = Router();

router.use('/v1', api);

export const v1 = router;
