"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = require("bcryptjs");
class UpdateScaleUserService {
    async execute(Code, { Name, Email, Password, Departament }) {
        const prisma = new client_1.PrismaClient();
        if (!Email)
            throw new Error('Email incorrect');
        const userAlreadyExists = await prisma.scale_users.findUnique({
            where: { email: Email },
        });
        if (userAlreadyExists)
            throw new Error('User already exists');
        const passwordHash = await (0, bcryptjs_1.hash)(Password, 8);
        const user = await prisma.scale_users.update({
            data: {
                name: Name,
                email: Email,
                password: passwordHash,
                departament: Departament,
            },
            where: { code: Code },
        });
        const userFind = {
            code: user.code,
            name: user.name,
            email: Email,
            depaetament: Departament,
        };
        prisma.$disconnect();
        return userFind;
    }
}
exports.default = UpdateScaleUserService;
