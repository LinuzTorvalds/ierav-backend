"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const moment_1 = __importDefault(require("moment"));
class WeddingBirthdayUserService {
    async execute(Code) {
        const prisma = new client_1.PrismaClient();
        const user = await prisma.users.findFirst({ where: { code: Code } });
        const today = new Date();
        const dateCompare = (0, moment_1.default)(today).format('DD-MM');
        if (dateCompare != user.weddingAnniversary.substring(0, 5))
            return false;
        const info = prisma.wedding_aniversary.findFirst({
            where: { name: user.name },
        });
        return info;
    }
}
exports.default = WeddingBirthdayUserService;
