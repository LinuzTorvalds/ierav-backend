"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SignUp_1 = __importDefault(require("../../services/scaleUsers/SignUp"));
class SignUpScaleUserControl {
    async handle(request, response) {
        const { Name, Email, Password, Departament } = request.body;
        const signUpScaleUserService = new SignUp_1.default();
        const user = await signUpScaleUserService
            .execute({
            Name,
            Email,
            Password,
            Departament,
        })
            .finally();
        return response.json(user);
    }
}
exports.default = SignUpScaleUserControl;
