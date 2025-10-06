import express, { Request, Response } from 'express';
import "dotenv/config";
import boardRoutes from './modules/board/board.routes';
import columnRoutes from './modules/column/column.routes';
import commentsRoutes from './modules/comment/comment.routes';
import tasksRoutes from './modules/task/task.routes';
import boardMemberRoutes from './modules/boardMember/boardMember.routes';
import authRoutes from './modules/auth/auth.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // https://www.geeksforgeeks.org/web-tech/express-js-express-urlencoded-function/

app.use("/auth", authRoutes);
app.use("/boards", boardRoutes);
app.use("/columns", columnRoutes);
app.use("/comments", commentsRoutes);
app.use("/tasks", tasksRoutes); 
app.use("/board-members", boardMemberRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);  
})
