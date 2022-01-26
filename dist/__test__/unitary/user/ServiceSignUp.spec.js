"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const SignUp_1 = __importDefault(require("../../../services/user/SignUp"));
let signUpUserService;
describe('Sign up user', () => {
    beforeAll(() => {
        signUpUserService = new SignUp_1.default();
    });
    it('should be able to create a new user', async () => {
        let passwordHash = await (0, bcryptjs_1.hash)('123', 8);
        const user = await signUpUserService.execute({
            Name: 'test',
            Sex: 'M',
            MaritalStatus: 'solteiro',
            Email: 'test@gmail.com',
            Password: passwordHash,
            Charge: 'membro',
            Birthday: '26-03',
            WeddingAnniversary: '26-03',
            Year: '2009',
        });
        expect(user).toHaveProperty('code');
    });
    it('should not be able to create an existing user', async () => {
        await signUpUserService.execute({
            Name: 'test existing',
            Sex: 'M',
            MaritalStatus: 'solteiro',
            Email: 'testexisting@gmail.com',
            Password: '123',
            Charge: 'membro',
            Birthday: '27-03',
            WeddingAnniversary: '26-03',
            Year: '2007',
        });
        await expect(signUpUserService.execute({
            Name: 'test existing',
            Sex: 'M',
            MaritalStatus: 'solteiro',
            Email: 'testexisting@gmail.com',
            Password: '123',
            Charge: 'membro',
            Birthday: '27-03',
            WeddingAnniversary: '26-03',
            Year: '2007',
        })).rejects.toEqual(new Error('User already exists'));
    });
});
