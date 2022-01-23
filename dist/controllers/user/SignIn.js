"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SignIn_1 = __importDefault(require("../../services/user/SignIn"));
class SignInUserControl {
    async handle(request, response) {
        const { Email, Password } = request.body;
        const signInUserService = new SignIn_1.default();
        const user = await signInUserService.execute({ Email, Password }).finally();
        return response.json(user);
    }
}
exports.default = SignInUserControl;
