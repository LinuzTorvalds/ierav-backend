"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class UpdateBirthdayService {
    async execute(Code, { Name, Birthday, Year }) {
        const prisma = new client_1.PrismaClient();
        if (!Code)
            throw new Error('Code incorrect');
        const user = await prisma.birthdays.update({
            data: {
                name: Name,
                birthday: Birthday,
                year: Year,
            },
            where: { code: Code },
        });
        const userFind = {
            code: user.code,
            name: user.name,
            birthday: user.birthday,
            year: user.year,
        };
        prisma.$disconnect();
        return userFind;
    }
}
exports.default = UpdateBirthdayService;
