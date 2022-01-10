import { Router } from 'express'

import UpdateUserControl from './controllers/user/Update'
import CreateUserControl from './controllers/user/SignUp'
import LoginUserControl from './controllers/user/SignIn'
import ReadUserControl from './controllers/user/Read'
import BirthdayUserControl from './controllers/user/Birthday'
import BirthdayListControl from './controllers/user/BirthdayList'
import WeddingBirthdayUserControl from './controllers/user/WeddingBirthday'
import WeddingBirthdayListControl from './controllers/user/WeddingBirthdayList'

const router = Router()

const updateUserControl = new UpdateUserControl()
const createUserControl = new CreateUserControl()
const loginUserControl = new LoginUserControl()
const readUserControl = new ReadUserControl()
const birthdayUserControl = new BirthdayUserControl()
const birthdayListControl = new BirthdayListControl()
const weddingBirthdayUserControl = new WeddingBirthdayUserControl()
const weddingBirthdayListControl = new WeddingBirthdayListControl()

router.put('/user/:Code', updateUserControl.handle)
router.get('/user/:Email', readUserControl.handle)
router.post('/signup', createUserControl.handle)
router.post('/signin', loginUserControl.handle)
router.get('/birthday/:Birthday', birthdayUserControl.handle)
router.get('/birthdaylist', birthdayListControl.handle)
router.get('/wedding/:wedding', weddingBirthdayUserControl.handle)
router.get('/wedding', weddingBirthdayListControl.handle)

export default router
