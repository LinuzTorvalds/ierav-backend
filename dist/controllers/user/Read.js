"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Read_1 = __importDefault(require("../../services/user/Read"));
class ReadUserControl {
    async handle(request, response) {
        const { Email } = request.params;
        const readUserService = new Read_1.default();
        const user = await readUserService.execute(Email).finally();
        return response.json(user);
    }
}
exports.default = ReadUserControl;
