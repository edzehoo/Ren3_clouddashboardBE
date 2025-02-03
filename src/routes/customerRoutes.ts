import { Router } from 'express';
import { getCustomers, createCustomer } from '../controllers/customerController';

const router = Router();

router.get('/', getCustomers);
router.post('/', createCustomer);
// router.get('/customers/:id', getCustomer);
// router.put('/customers/:id', updateCustomer);
// router.delete('/customers/:id', deleteCustomer);

export default router;
