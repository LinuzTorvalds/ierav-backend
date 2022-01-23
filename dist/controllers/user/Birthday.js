"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Birthday_1 = __importDefault(require("../../services/user/Birthday"));
class BirthdayUserControl {
    async handle(request, response) {
        const { Birthday } = request.params;
        const birthday = new Birthday_1.default();
        const user = await birthday.execute(Birthday).finally();
        if (user == true)
            return response.json('0k');
        else
            return response.json('no');
    }
}
exports.default = BirthdayUserControl;
