"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const uuid_1 = require("uuid");
const bcryptjs_1 = require("bcryptjs");
class SignUpUserService {
    async execute({ Name, Sex, MaritalStatus, Email, Password, Charge, Birthday, Year, WeddingAnniversary, }) {
        const prisma = new client_1.PrismaClient();
        if (!Email)
            throw new Error('Email incorrect');
        const userAlreadyExists = await prisma.users.findUnique({
            where: { email: Email },
        });
        if (userAlreadyExists)
            throw new Error('User already exists');
        const passwordHash = await (0, bcryptjs_1.hash)(Password, 8);
        const user = await prisma.users.create({
            data: {
                code: (0, uuid_1.v4)(),
                name: Name,
                sex: Sex,
                maritalStatus: MaritalStatus,
                email: Email,
                password: passwordHash,
                charge: Charge,
                birthday: Birthday,
                year: Year,
                weddingAnniversary: WeddingAnniversary,
            },
        });
        const userFind = {
            code: user.code,
            name: user.name,
            sex: user.sex,
            maritalStatus: user.maritalStatus,
            email: Email,
            charge: user.charge,
            birthday: user.birthday,
            year: user.year,
            weddingAnniversary: user.weddingAnniversary,
        };
        prisma.$disconnect();
        return userFind;
    }
}
exports.default = SignUpUserService;
