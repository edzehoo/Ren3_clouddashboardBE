import { Request, Response } from 'express';
import * as customerService from '../services/customerService';

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await customerService.getCustomers();
    res.status(200).json(customers);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching customers' });
  }
};

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.createCustomer(req.body);
    res.status(201).json(customer);
  } catch (err) {
    res.status(500).json({ error: 'Error creating customer' });
  }
};

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.getCustomerById(req.params.id);
    if(customer !== null) {
      const [affectedCount, updatedRows]  = await customerService.updateCustomer(req.params.id,req.body);
      res.status(200).json(updatedRows);
    } else {
      res.status(404).json({message : 'resource not found'});
    }
  } catch (err) {
    res.status(500).json({ error: 'Error updating customer' });
  }
};

export const getCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.getCustomerById(req.params.id);
    (customer !== null) 
    ? res.status(200).json(customer) 
    : res.status(404).json({message : 'resource not found'}) ;
  } catch (err) {
    res.status(500).json({ error: `Error fetching customer ${req.params.id}` });
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.getCustomerById(req.params.id);
    if(customer !== null) {
      const data  = await customerService.deleteCustomerById(req.params.id,req.body);
      res.status(200).json({message : `Customer: ${customer.id} deleted!`});
    } else {
      res.status(404).json({message : 'resource not found'});
    }
  } catch (err) {
    res.status(500).json({ error: 'Error deleting customer' });
  }
};
