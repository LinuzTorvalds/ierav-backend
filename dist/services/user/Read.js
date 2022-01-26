"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class ReadUserService {
    async execute(Email) {
        const prisma = new client_1.PrismaClient();
        const user = await prisma.users.findUnique({ where: { email: Email } });
        if (!user)
            throw new Error('No user found');
        prisma.$disconnect();
        return user;
    }
}
exports.default = ReadUserService;
