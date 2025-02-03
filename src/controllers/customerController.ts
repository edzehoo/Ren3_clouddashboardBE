import { Request, Response } from 'express';
import * as customerService from '../services/customerService';

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const users = await customerService.getCustomers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const user = await customerService.createCustomer(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error creating user' });
  }
};
