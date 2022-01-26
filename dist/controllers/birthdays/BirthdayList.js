"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BirthdayList_1 = __importDefault(require("../../services/birthdays/BirthdayList"));
class BirthdayListControl {
    async handle(request, response) {
        const birthdayList = new BirthdayList_1.default();
        const list = await birthdayList.execute().finally();
        if (list != null)
            return response.json(list);
        else
            return response.json('Sem aniversariantes essa semana :´(');
    }
}
exports.default = BirthdayListControl;
