"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SignIn_1 = __importDefault(require("../../services/scaleUsers/SignIn"));
class SignInScaleUserControl {
    async handle(request, response) {
        const { Email, Password } = request.body;
        const signInScaleUserService = new SignIn_1.default();
        const user = await signInScaleUserService
            .execute({ Email, Password })
            .finally();
        return response.json(user);
    }
}
exports.default = SignInScaleUserControl;
