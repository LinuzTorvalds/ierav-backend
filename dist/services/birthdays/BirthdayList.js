"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const moment_1 = __importDefault(require("moment"));
const excel4node_1 = __importDefault(require("excel4node"));
const wb = new excel4node_1.default.Workbook();
const ws = wb.addWorksheet('teste');
class BirthdayListService {
    async execute() {
        const prisma = new client_1.PrismaClient();
        let birthdays;
        birthdays = await prisma.birthdays.findMany();
        const today = new Date();
        var sunday, saturday;
        if (today.getDay() === 0) {
            sunday = (0, moment_1.default)(today).format('DD-MM');
            saturday = (0, moment_1.default)(today).add(6, 'days').format('DD-MM');
        }
        else {
            const days = 7 - today.getDay();
            sunday = (0, moment_1.default)(today).add(days, 'days').toDate();
            saturday = (0, moment_1.default)(sunday).add(6, 'days').format('DD-MM');
            sunday = (0, moment_1.default)(sunday).format('DD-MM');
        }
        let listBirthdays = [];
        for (let user of birthdays) {
            const birthday = user.birthday.substring(0, 5);
            const start = sunday;
            const end = saturday;
            if (birthday.substring(3, 5) == start.substring(3, 5) ||
                birthday.substring(3, 5) == end.substring(3, 5)) {
                if (birthday.substring(0, 2) >= start.substring(0, 2) &&
                    birthday.substring(0, 2) <= end.substring(0, 2)) {
                    listBirthdays.push(Object.assign({}, user));
                }
            }
        }
        let weddings_Aninversary;
        weddings_Aninversary = await prisma.wedding_aniversary.findMany();
        var sunday, saturday;
        if (today.getDay() === 0) {
            sunday = (0, moment_1.default)(today).format('DD-MM');
            saturday = (0, moment_1.default)(today).add(6, 'days').format('DD-MM');
        }
        else {
            const days = 7 - today.getDay();
            sunday = (0, moment_1.default)(today).add(days, 'days').toDate();
            saturday = (0, moment_1.default)(sunday).add(6, 'days').format('DD-MM');
            sunday = (0, moment_1.default)(sunday).format('DD-MM');
        }
        let listWeddingAnniversary = [];
        for (let user of weddings_Aninversary) {
            const weddingAnniversary = user.birthday.substring(0, 5);
            const start = sunday;
            const end = saturday;
            if (weddingAnniversary.substring(3, 5) == start.substring(3, 5) ||
                weddingAnniversary.substring(3, 5) == end.substring(3, 5)) {
                if (weddingAnniversary.substring(0, 2) >= start.substring(0, 2) &&
                    weddingAnniversary.substring(0, 2) <= end.substring(0, 2)) {
                    user.year = (0, moment_1.default)(today).subtract(user.year, 'year').format('YYYY');
                    let data;
                    if (user.year.substring(0, 2) === '00')
                        data = await prisma.wedding.findFirst({
                            where: { year: user.year.substring(2, 4) },
                        });
                    else
                        data = await prisma.wedding.findFirst({
                            where: { year: user.year.substring(1, 4) },
                        });
                    const wedding = data.description;
                    user.year = data.year;
                    listWeddingAnniversary.push(Object.assign(Object.assign({}, user), { wedding }));
                }
            }
        }
        let result = { listBirthdays: [], listWeddingAnniversary: [] };
        result.listBirthdays = listBirthdays;
        result.listWeddingAnniversary = listWeddingAnniversary;
        ws.cell(1, 1).string('Aniversários natalicios');
        const headingColumnNames0 = ['nome', 'data'];
        let headingColumnIndex = 1;
        headingColumnNames0.forEach((heading) => {
            ws.cell(3, headingColumnIndex++).string(heading);
        });
        let rowIndex = 4;
        result.listBirthdays.forEach((record) => {
            let columnIndex = 1;
            ws.cell(rowIndex, columnIndex++).string(record.name);
            ws.cell(rowIndex, columnIndex++).string(record.birthday);
            rowIndex++;
        });
        rowIndex++;
        ws.cell(rowIndex++, 1).string('Aniversários de casamento');
        const headingColumnNames1 = ['nome', 'data', 'anos', 'bodas'];
        rowIndex++;
        headingColumnIndex = 1;
        headingColumnNames1.forEach((heading) => {
            ws.cell(rowIndex, headingColumnIndex++).string(heading);
        });
        rowIndex++;
        result.listWeddingAnniversary.forEach((record) => {
            let columnIndex = 1;
            ws.cell(rowIndex, columnIndex++).string(record.name);
            ws.cell(rowIndex, columnIndex++).string(record.birthday);
            ws.cell(rowIndex, columnIndex++).string(record.year);
            ws.cell(rowIndex, columnIndex++).string(record.wedding);
            rowIndex++;
        });
        wb.write('file.xlsx');
        if (result.listBirthdays.length === 0 &&
            result.listWeddingAnniversary.length === 0)
            return null;
        else
            return result;
    }
}
exports.default = BirthdayListService;
