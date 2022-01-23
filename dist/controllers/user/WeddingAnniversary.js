"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WeddingAnniversary_1 = __importDefault(require("../../services/user/WeddingAnniversary"));
class WeddingBirthdayUserControl {
    async handle(request, response) {
        const { weddingBirthday } = request.params;
        const WeddingBirthday = new WeddingAnniversary_1.default();
        const user = await WeddingBirthday.execute(weddingBirthday).finally();
        if (user != false)
            return response.json(user);
        else
            return response.json('no');
    }
}
exports.default = WeddingBirthdayUserControl;
