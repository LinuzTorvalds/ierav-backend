"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Update_1 = __importDefault(require("../../services/user/Update"));
class UpdateUserControl {
    async handle(request, response) {
        const { Code } = request.params;
        const { Name, Sex, MaritalStatus, Email, Password, Birthday, WeddingAnniversary, Year, } = request.body;
        const updateUserService = new Update_1.default();
        await updateUserService
            .execute(Code, {
            Name,
            Sex,
            MaritalStatus,
            Email,
            Password,
            Birthday,
            WeddingAnniversary,
            Year,
        })
            .finally();
        return response.status(201).send('successfully updated :D');
    }
}
exports.default = UpdateUserControl;
