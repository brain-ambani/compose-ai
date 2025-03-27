import jwt, { JwtPayload } from "jsonwebtoken";
import { SignOptions } from "jsonwebtoken";

interface SignOption extends SignOptions {}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "1h",
};

export function generateAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
) {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret) {
    throw new Error("JWT_SECRET_KEY is not defined");
  }

  console.log("Generating Token with Secret:", secret);
  const token = jwt.sign(payload, secret, options);
  return token;
}
