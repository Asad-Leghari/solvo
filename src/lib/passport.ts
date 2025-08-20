import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel, { User } from "@/models/User.model";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email: string, password: string, done) => {
      await dbConnect();
      try {
        const user = await UserModel.findOne({ email });
        if (!user) return done(null, false, { message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Invalid credentials" });
        }

        return done(null, user); // 👈 full mongoose user doc here
      } catch (err) {
        return done(err as Error);
      }
    }
  )
);

// passport.use(
//   new JwtStrategy(
//     {
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: JWT_SECRET,
//     },
//     async (payload: { id: string }, done) => {
//       console.log("👉 JWT payload received:", payload);
//       await dbConnect();
//       try {
//         const user = await UserModel.findById(payload.id).select("-password");
//         console.log("👉 User from DB:", user);
//         if (!user) return done(null, false);
//         return done(null, user);
//       } catch (err) {
//         console.error("❌ JWT strategy error:", err);
//         return done(err as Error, false);
//       }
//     }
//   )
// );

// export default passport;

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: (req) => {
        // ✅ Custom extractor for Next.js Request
        let token: string | null = null;

        // In Next.js request, headers are a Map-like object
        const authHeader =
          (req as any)?.headers?.get?.("authorization") ||
          (req as any)?.headers?.authorization;

        if (authHeader && authHeader.startsWith("Bearer ")) {
          token = authHeader.substring(7);
        }

        console.log("👉 Extracted token:", token);
        return token;
      },
      secretOrKey: JWT_SECRET,
    },
    async (payload: { id: string }, done) => {
      console.log("👉 JWT payload received:", payload);
      await dbConnect();
      try {
        const user = await UserModel.findById(payload.id).select("-password");
        console.log("👉 User from DB:", user);
        if (!user) return done(null, false);
        return done(null, user);
      } catch (err) {
        console.error("❌ JWT strategy error:", err);
        return done(err as Error, false);
      }
    }
  )
);

export default passport;
