import { Router } from 'express';
import {
    getCustomers,
    createCustomer,
    updateCustomer,
    getCustomer,
    deleteCustomer,
} from '../controllers/customerController';

const router = Router();

router.get('/', getCustomers);
router.post('/', createCustomer);
router.get('/:id', getCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;
