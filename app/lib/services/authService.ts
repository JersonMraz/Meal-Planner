import { prisma } from "../db/prisma";
import { hashPassword, comparePassword } from "../utils/hash";
import { signToken } from "../utils/jwt";

export async function registerUser(firstname: string, lastname: string, email: string, password: string) {
    const existing = await prisma.user.findUnique({ where: { email } });

    if (existing) {
        throw new Error("Email address is already in use.");
    }

    const hashed = await hashPassword(password);

    const user = await prisma.user.create({
        data: {
            firstname,
            lastname,
            email,
            password: hashed,
            dietaryPreferences: {
                create: {} // Creates record with defaults from schema
            },
            notificationSettings: {
                create: {} // Creates record with defaults from schema
            },
            languageAndRegion: {
                create: {} // Creates record with defaults from schema
            }
        }
    });

    return user;
}

export async function loginUser(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const isValid = await comparePassword(password, user.password);

    if (!isValid) {
        throw new Error("Invalid credentials");
    }

    const token = signToken({ userId: user.id });

    return { user, token };
}