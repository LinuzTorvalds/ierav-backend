"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Update_1 = __importDefault(require("../../services/scaleUsers/Update"));
class UpdateUserControl {
    async handle(request, response) {
        const { Code } = request.params;
        const { Name, Email, Password, Departament } = request.body;
        const updateScaleUserService = new Update_1.default();
        await updateScaleUserService
            .execute(Code, {
            Name,
            Email,
            Password,
            Departament,
        })
            .finally();
        return response.status(201).send('successfully updated :D');
    }
}
exports.default = UpdateUserControl;
