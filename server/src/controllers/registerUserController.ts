import { db } from "@/db/db";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "@prisma/client"; // Import the User type from Prisma

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function registerUser(req: Request, res: Response) {
  const { name, email, password } = req.body;

  try {
    // 1. Input Validation
    if (!name || !email || !password) {
      res.status(400).json({
        error: "Bad Request",
        message: "All fields are required.",
        data: null,
      });
      return;
    }

    if (!isValidEmail(email)) {
      res.status(400).json({
        error: "Bad Request",
        message: "Invalid email format.",
        data: null,
      });
      return;
    }

    if (password.length < 8) {
      res.status(400).json({
        error: "Bad Request",
        message: "Password must be at least 8 characters.",
        data: null,
      });
      return;
    }

    // 2. Check for Existing User (Email Conflict)
    const userExists = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (userExists) {
      res.status(409).json({
        error: "Conflict", // Use 409 Conflict status
        message: "Email already exists.",
        data: null,
      });
      return;
    }

    // 3. Hash the Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create User
    const newUser: User = await db.user.create({
      // Use the User type
      data: {
        name,
        email,
        password: hashedPassword,
        // imageUrl: imageUrl, // No need for the ternary, Prisma handles null/undefined
      },
    });

    // 5.  Omit the password.  Use explicit selection.
    const userWithoutPassword = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      // imageUrl: newUser.imageUrl,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };

    // 6. Send Success Response
    res.status(201).json({
      // 201 Created for successful resource creation
      message: "User registered successfully.",
      data: userWithoutPassword,
      error: null,
    });
  } catch (error: any) {
    // 7. Handle Server Errors
    console.error("Registration error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message:
        error.message || "An unexpected error occurred during registration.",
      data: null,
    });
  }
}
