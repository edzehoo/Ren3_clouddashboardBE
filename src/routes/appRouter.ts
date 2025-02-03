import { Router } from 'express';
import customerRoutes from './customerRoutes';

const appRouter = Router();

appRouter.use('/api/customers', customerRoutes);

export default appRouter;
