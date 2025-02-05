import { Customer } from '../models/Customer';

export const getCustomers = async () => {
    return await Customer.findAll();
};

export const createCustomer = async (data: any) => {
    return await Customer.create(data);
};

export const updateCustomer = async (id: string, data: any) => {
    return await Customer.update( data,{
        where: { id : id },
        returning: true,
    });
};

export const getCustomerById = async (id: string) => {
    return await Customer.findOne({
        where: { id : id },
    });
};

export const deleteCustomerById = async (id: string, data: any) => {
    return await Customer.destroy({
        where: { id : id },
    });
};
