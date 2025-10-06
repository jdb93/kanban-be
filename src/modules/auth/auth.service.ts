import { Request, Response } from "express";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth as clientAuth } from "../../config/firebaseClient";
import { getAdminAuth } from "../../config/firebaseAdmin";


export async function login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
        const userCredential = await signInWithEmailAndPassword(clientAuth, email, password);
        const idToken = await userCredential.user.getIdToken();
        const decoded = await getAdminAuth().verifyIdToken(idToken);

        res.cookie("token", idToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 1000 * 24, // 1 day
        })

        res.json({ message: "Login successful", user: decoded});
    } catch (error) {
        if (error instanceof Error) {
            res.status(401).json({ message: "Invalid email or password", error: error.message });
        } else {
            res.status(401).json({ message: "Invalid email or password", error: "Unknown error occurred" });
        }
        
    }
}

export async function logout(req: Request, res: Response) {
    res.clearCookie("token");
    res.json({ message: "Logout successful" });
}