import { Router } from 'express'

import UpdateUserControl from './controllers/user/Update'
import CreateUserControl from './controllers/user/SignUp'
import LoginUserControl from './controllers/user/SignIn'
import ReadUserControl from './controllers/user/Read'
import BirthdayUserControl from './controllers/user/Birthday'

const router = Router()

const updateUserControl = new UpdateUserControl()
const createUserControl = new CreateUserControl()
const loginUserControl = new LoginUserControl()
const readUserControl = new ReadUserControl()
const birthdayUserControl = new BirthdayUserControl()

router.put('/user/:Code', updateUserControl.handle)
router.get('/user/:Email', readUserControl.handle)
router.post('/signup', createUserControl.handle)
router.post('/signin', loginUserControl.handle)
router.get('/birthday/:Birthday', birthdayUserControl.handle)

export default router
