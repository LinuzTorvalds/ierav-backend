import { Router } from 'express'

// users
import UpdateUserControl from './controllers/user/Update'
import CreateUserControl from './controllers/user/SignUp'
import SignInUserControl from './controllers/user/SignIn'
import ReadUserControl from './controllers/user/Read'
import BirthdayUserControl from './controllers/user/Birthday'
import BirthdayListControl from './controllers/birthdays/BirthdayList'
import WeddingBirthdayUserControl from './controllers/user/WeddingAnniversary'
import WeddingBirthdayListControl from './controllers/birthdays/WeddingBirthdayList'

//scaleusers
import UpdateScaleUserControl from './controllers/scaleUsers/Update'
import CreateScaleUserControl from './controllers/scaleUsers/SignUp'
import SignInScaleUserControl from './controllers/scaleUsers/SignIn'
import ReadScaleUserControl from './controllers/scaleUsers/Read'

const router = Router()

//users
const updateUserControl = new UpdateUserControl()
const createUserControl = new CreateUserControl()
const signInUserControl = new SignInUserControl()
const readUserControl = new ReadUserControl()
const birthdayUserControl = new BirthdayUserControl()
const birthdayListControl = new BirthdayListControl()
const weddingBirthdayUserControl = new WeddingBirthdayUserControl()
const weddingBirthdayListControl = new WeddingBirthdayListControl()

//scaleusers
const updateScaleUserControl = new UpdateScaleUserControl()
const createScaleUserControl = new CreateScaleUserControl()
const signInScaleUserControl = new SignInScaleUserControl()
const readScaleUserControl = new ReadScaleUserControl()

//users
router.put('/user/:Code', updateUserControl.handle)
router.get('/user/:Email', readUserControl.handle)
router.post('/signup', createUserControl.handle)
router.post('/signin', signInUserControl.handle)
router.get('/birthday/:Birthday', birthdayUserControl.handle)
router.get('/birthdaylist', birthdayListControl.handle)
router.get('/wedding/:wedding', weddingBirthdayUserControl.handle)
router.get('/wedding', weddingBirthdayListControl.handle)

//scaleusers
router.put('/scaleuser/:Code', updateScaleUserControl.handle)
router.get('/scaleuser/:Email', readScaleUserControl.handle)
router.post('/scalesignup', createScaleUserControl.handle)
router.post('/scalesignin', signInScaleUserControl.handle)

export default router
