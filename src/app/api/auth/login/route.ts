import { NextResponse } from "next/server";
import passport from "@/lib/passport";
import jwt from "jsonwebtoken";
import { User } from "@/models/User.model";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  return new Promise((resolve) => {
    passport.authenticate(
      "local",
      { session: false },
      (
        err: Error | null,
        user: User | false,
        info: { message?: string } | undefined
      ) => {
        if (err) {
          return resolve(
            NextResponse.json(
              { success: false, error: err.message },
              { status: 500 }
            )
          );
        }

        if (!user) {
          return resolve(
            NextResponse.json(
              { success: false, error: info?.message || "Invalid login" },
              { status: 401 }
            )
          );
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, {
          expiresIn: "1d",
        });

        resolve(
          NextResponse.json({
            success: true,
            token,
            user: { id: user._id, email: user.email, username: user.username },
          })
        );
      }
    )({ body: { email, password } } as any, {} as any);
  });
}
