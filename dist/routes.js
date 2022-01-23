"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Update_1 = __importDefault(require("./controllers/user/Update"));
const SignUp_1 = __importDefault(require("./controllers/user/SignUp"));
const SignIn_1 = __importDefault(require("./controllers/user/SignIn"));
const Read_1 = __importDefault(require("./controllers/user/Read"));
const Birthday_1 = __importDefault(require("./controllers/user/Birthday"));
const BirthdayList_1 = __importDefault(require("./controllers/birthdays/BirthdayList"));
const WeddingAnniversary_1 = __importDefault(require("./controllers/user/WeddingAnniversary"));
const Update_2 = __importDefault(require("./controllers/scaleUsers/Update"));
const SignUp_2 = __importDefault(require("./controllers/scaleUsers/SignUp"));
const SignIn_2 = __importDefault(require("./controllers/scaleUsers/SignIn"));
const Read_2 = __importDefault(require("./controllers/scaleUsers/Read"));
const router = (0, express_1.Router)();
const updateUserControl = new Update_1.default();
const createUserControl = new SignUp_1.default();
const signInUserControl = new SignIn_1.default();
const readUserControl = new Read_1.default();
const birthdayUserControl = new Birthday_1.default();
const birthdayListControl = new BirthdayList_1.default();
const weddingBirthdayUserControl = new WeddingAnniversary_1.default();
const updateScaleUserControl = new Update_2.default();
const createScaleUserControl = new SignUp_2.default();
const signInScaleUserControl = new SignIn_2.default();
const readScaleUserControl = new Read_2.default();
router.put('/user/:Code', updateUserControl.handle);
router.get('/user/:Email', readUserControl.handle);
router.post('/signup', createUserControl.handle);
router.post('/signin', signInUserControl.handle);
router.get('/birthday/:Birthday', birthdayUserControl.handle);
router.get('/birthdaylist', birthdayListControl.handle);
router.get('/wedding/:wedding', weddingBirthdayUserControl.handle);
router.put('/scaleuser/:Code', updateScaleUserControl.handle);
router.get('/scaleuser/:Email', readScaleUserControl.handle);
router.post('/scalesignup', createScaleUserControl.handle);
router.post('/scalesignin', signInScaleUserControl.handle);
exports.default = router;
