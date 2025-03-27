import { db } from "@/db/db";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function createUser(req: Request, res: Response) {
  const { name, email, password, imageUrl } = req.body;

  try {
    // check for field validation
    if (!name || !email || !password) {
      res.status(400).json({ message: "Please fill all fields" });
      return;
    }

    //validate email
    if (!isValidEmail(email)) {
      res.status(400).json({ message: "Invalid Email Format" });
      return;
    }

    // check if user already exists
    const userExists = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (userExists) {
      res.status(409).json({ error: "Email already exists", data: null });
      return;
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        imageUrl: imageUrl
          ? imageUrl
          : "https://utfs.io/f/c61ec63c-42b1-4939-a7fb-ed04d43e23ee-2558r.png",
      },
    });

    //  modify the return user not to include password
    const { password: savedPassword, ...others } = newUser;
    res.status(200).json({
      message: "User created successfully",
      data: others,
      error: null,
    });
  } catch (error) {
    console.error(error);
  }
}
