import express from "express";
import cors from 'cors';
import ChatRoutes from './src/routes/ChatRoutes.js';

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/chat', ChatRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});