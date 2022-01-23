"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SignUp_1 = __importDefault(require("../../services/user/SignUp"));
class SignUpUserControl {
    async handle(request, response) {
        const { Name, Sex, MaritalStatus, Email, Password, Charge, Birthday, WeddingAnniversary, Year, } = request.body;
        const signUpUserService = new SignUp_1.default();
        const user = await signUpUserService
            .execute({
            Name,
            Sex,
            MaritalStatus,
            Email,
            Password,
            Charge,
            Birthday,
            WeddingAnniversary,
            Year,
        })
            .finally();
        return response.json(user);
    }
}
exports.default = SignUpUserControl;
