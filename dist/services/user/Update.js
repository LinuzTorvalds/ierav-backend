"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = require("bcryptjs");
class UpdateUserService {
    async execute(Code, { Name, Sex, MaritalStatus, Email, Password, Birthday, Year, WeddingAnniversary, }) {
        const prisma = new client_1.PrismaClient();
        if (!Code)
            throw new Error('Code incorrect');
        const passwordHash = await (0, bcryptjs_1.hash)(Password, 8);
        const user = await prisma.users.update({
            data: {
                name: Name,
                sex: Sex,
                maritalStatus: MaritalStatus,
                email: Email,
                password: passwordHash,
                birthday: Birthday,
                year: Year,
                weddingAnniversary: WeddingAnniversary,
            },
            where: { code: Code },
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
exports.default = UpdateUserService;
