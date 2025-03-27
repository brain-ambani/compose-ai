import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: JwtPayload;
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Invalid authorization header" });
    return;
  }

  const token = authHeader.split(" ")[1]; // Bearer <token>

  try {
    console.log("Extracted Token:", token); // Debugging log
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
      return res
        .status(500)
        .json({ message: "JWT secret key is not configured" });
    }

    console.log("Verifying Token with Secret:", secretKey);
    console.log("Verifying Token:", token);

    const decoded = jwt.verify(token, secretKey) as JwtPayload; //verify the token.
    req.user = decoded; //Add decoded payload to the req object.
    next(); //allow request to continue.
  } catch (error: any) {
    console.error("JWT Verification Error:", error);
    res.status(403).json({ message: "Invalid token", error: error.message });
    return;
  }
}

// import express, { Request, Response, NextFunction } from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";

// // Secret key for signing the JWT (in a real app, store this securely)
// const secretKey = process.env.JWT_SECRET_KEY;

// // Define a custom type for the request that includes the user property
// interface AuthenticatedRequest extends Request {
//   user?: string | JwtPayload;
// }

// // Middleware to verify JWT
// export function verifyToken(
//   req: AuthenticatedRequest,
//   res: Response,
//   next: NextFunction
// ): void {
//   const token = req.headers["authorization"];
//   console.log(secretKey);

//   if (!token) {
//     res.status(403).json({ message: "No token provided" });
//     return;
//   }

//   // Remove "Bearer " if the token is provided in "Bearer <token>" format
//   const tokenWithoutBearer = token.replace("Bearer ", "");

//   if (!secretKey) {
//     res.status(500).json({ message: "JWT secret key is not configured" });
//     return;
//   }
//   jwt.verify(tokenWithoutBearer, secretKey, (err, decoded) => {
//     if (err) {
//       res.status(401).json({ message: "Failed to authenticate token" });
//       return;
//     }
//     // If the token is valid, save the decoded information to request for use in other routes
//     req.user = decoded;
//     next();
//   });
// }
