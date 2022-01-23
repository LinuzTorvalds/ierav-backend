"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const uuid_1 = require("uuid");
class CreateBirthdayService {
    async execute({ Name, Birthday, Year }) {
        const prisma = new client_1.PrismaClient();
        const user = await prisma.birthdays.create({
            data: {
                code: (0, uuid_1.v4)(),
                name: Name,
                birthday: Birthday,
                year: Year,
            },
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
exports.default = CreateBirthdayService;
