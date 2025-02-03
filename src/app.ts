import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import appRouter from './routes/appRouter';
import { setupDatabase } from './db'; 

dotenv.config();

(async () => {
  const app = express();

  app.use(express.json());

  app.use(cors({
    origin: ['http://localhost:8080','http://localhost'],  // Allow only this origin (your React frontend)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],  // Customize allowed headers
  }));

  app.use('/', appRouter);

  const PORT = process.env.PORT || 3000;

  // Connect to the database
  await setupDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
  });

})();
