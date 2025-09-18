import express, { Request, Response } from 'express';
import boardRoutes from './modules/board/board.routes';
import columnRoutes from './modules/column/column.routes';
import commentsRoutes from './modules/comment/comment.routes';

require('dotenv').config();

const app = express();
app.use(express.json());

// Rutas
app.use("/boards", boardRoutes);
app.use("/columns", columnRoutes);
app.use("/comments", commentsRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);  
})
