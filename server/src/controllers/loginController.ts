import { db } from "@/db/db";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateAccessToken } from "@/utils/generateJWT";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function authorizeUser(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    // check for field validation
    if (!email || !password) {
      res.status(400).json({ error: "Please fill all fields", data: null });
      return;
    }

    //validate email
    if (!isValidEmail(email)) {
      res.status(400).json({ error: "Invalid Email Format", data: null });
      return;
    }

    // check if user exists
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser) {
      res.status(403).json({ error: "Invalid credentials", data: null });
      return;
    }

    // compare password
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      res.status(401).json({ error: "Invalid credentials", data: null });
      return;
    }

    // Destructure out the password from the existing user
    const { password: savedPassword, ...userWithoutPassword } = existingUser;

    const accessToken = generateAccessToken(userWithoutPassword);
    const result = { ...userWithoutPassword, accessToken };
    res.status(200).json({ result, message: "Login successful" });
    return;
  } catch (error) {
    console.error(error);
  }
}
