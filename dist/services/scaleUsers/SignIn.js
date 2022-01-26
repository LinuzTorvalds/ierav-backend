"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = require("bcryptjs");
class SignInScaleUserService {
    async execute({ Email, Password }) {
        const prisma = new client_1.PrismaClient();
        const user = await prisma.scale_users.findFirst({ where: { email: Email } });
        if (!user)
            throw new Error('Login/Password incorrect');
        const passwordMatch = await (0, bcryptjs_1.compare)(Password, user.password);
        if (!passwordMatch)
            throw new Error('Login/Password incorrect');
        const userFind = {
            code: user.code,
            name: user.name,
            email: user.email,
            password: user.password,
            departament: user.departament,
        };
        prisma.$disconnect();
        return userFind;
    }
}
exports.default = SignInScaleUserService;
