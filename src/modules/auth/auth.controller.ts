import { Request, Response } from "express";
import * as authService from "./auth.service";

export async function login(req: Request, res: Response) {
    try {
        await authService.login(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function logout(req: Request, res: Response) {
    try {
        await authService.logout(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}