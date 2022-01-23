"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const client_1 = require("@prisma/client");
class BirthdayUserService {
    async execute(Code) {
        const today = new Date();
        const prisma = new client_1.PrismaClient();
        const user = await prisma.users.findFirst({ where: { code: Code } });
        const dateCompare = (0, moment_1.default)(today).format('DD-MM');
        if (dateCompare != user.birthday.substring(0, 5))
            return false;
        return true;
    }
}
exports.default = BirthdayUserService;
