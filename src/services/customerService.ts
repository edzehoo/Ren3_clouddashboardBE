import { Customer } from '../models/Customer';

export const getCustomers = async () => {
    return await Customer.findAll();
};

export const createCustomer = async (data: any) => {
    return await Customer.create(data);
};
