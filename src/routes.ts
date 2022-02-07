import { Request, Response, Router } from 'express'

//aniversary
import BirthdayListControl from './controllers/birthdays/BirthdayList'
import CreateBirthdayControl from './controllers/birthdays/Create'
import UpdateBirthdayControl from './controllers/birthdays/Update'
import CreateWeddingControl from './controllers/wedding/Create'
import UpdateWeddingControl from './controllers/wedding/Update'
import CreateWeddingsControl from './controllers/wedding/CreateWeddings'
import UpdateWeddingsControl from './controllers/wedding/UpdateWeddings'

// users
import UpdateUserControl from './controllers/user/Update'
import CreateUserControl from './controllers/user/SignUp'
import SignInUserControl from './controllers/user/SignIn'
import ReadUserControl from './controllers/user/Read'
import BirthdayUserControl from './controllers/user/Birthday'
import WeddingBirthdayUserControl from './controllers/user/WeddingAnniversary'

//scaleusers
import UpdateScaleUserControl from './controllers/scaleUsers/Update'
import CreateScaleUserControl from './controllers/scaleUsers/SignUp'
import SignInScaleUserControl from './controllers/scaleUsers/SignIn'
import ReadScaleUserControl from './controllers/scaleUsers/Read'

const router = Router()

//aniversary
const birthdayListControl = new BirthdayListControl()
const createBirthdayControl = new CreateBirthdayControl()
const updateBirhtdayControl = new UpdateBirthdayControl()
const createWeddingControl = new CreateWeddingControl()
const updateWeddingControl = new UpdateWeddingControl()
const createWeddingsControl = new CreateWeddingsControl()
const updateWeddingsControl = new UpdateWeddingsControl()

//users
const updateUserControl = new UpdateUserControl()
const createUserControl = new CreateUserControl()
const signInUserControl = new SignInUserControl()
const readUserControl = new ReadUserControl()
const birthdayUserControl = new BirthdayUserControl()
const weddingBirthdayUserControl = new WeddingBirthdayUserControl()

//scaleusers
const updateScaleUserControl = new UpdateScaleUserControl()
const createScaleUserControl = new CreateScaleUserControl()
const signInScaleUserControl = new SignInScaleUserControl()
const readScaleUserControl = new ReadScaleUserControl()

//test
router.get('/', (request: Request, response: Response) => {
  response.send('Ready :) ^-^')
})

//aniversary
router.get('/birthdaylist', birthdayListControl.handle)
router.post('/birthday/create', createBirthdayControl.handle)
router.put('/birthday/update/:Code', updateBirhtdayControl.handle)
router.post('/wedding/create', createWeddingControl.handle)
router.put('/wedding/update/:Code', updateWeddingControl.handle)
router.post('/weddings/create', createWeddingsControl.handle)
router.put('/weddings/update/:Year', updateWeddingsControl.handle)

//users
router.put('/users/:Code', updateUserControl.handle)
router.get('/users/:Email', readUserControl.handle)
router.post('/users/signup', createUserControl.handle)
router.post('/users/signin', signInUserControl.handle)
router.get('/users/birthday/:Code', birthdayUserControl.handle)
router.get('/users/wedding/:Code', weddingBirthdayUserControl.handle)

//scaleusers
router.put('/scaleuser/:Code', updateScaleUserControl.handle)
router.get('/scaleuser/:Email', readScaleUserControl.handle)
router.post('/scalesignup', createScaleUserControl.handle)
router.post('/scalesignin', signInScaleUserControl.handle)

export default router
