"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const excel4node_1 = __importDefault(require("excel4node"));
const wb = new excel4node_1.default.Workbook();
const ws = wb.addWorksheet('teste');
describe('nada º~º', () => {
    it('test 0_0', async () => {
        const prisma = new client_1.PrismaClient();
        const data = await prisma.birthdays.findMany();
        const headingColumnNames = ['code', 'name', 'birthday', 'year'];
        let headingColumnIndex = 1;
        headingColumnNames.forEach((heading) => {
            ws.cell(1, headingColumnIndex++).string(heading);
        });
        let rowIndex = 2;
        data.forEach((record) => {
            let columnIndex = 1;
            Object.keys(record).forEach((columnName) => {
                ws.cell(rowIndex, columnIndex++).string(record[columnName]);
            });
            rowIndex++;
        });
    });
});
