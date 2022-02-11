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
import UpdateUserControl from './controllers/users/Update'
import CreateUserControl from './controllers/users/SignUp'
import SignInUserControl from './controllers/users/SignIn'
import ReadUserControl from './controllers/users/Read'
import BirthdayUserControl from './controllers/users/Birthday'
import WeddingBirthdayUserControl from './controllers/users/WeddingAnniversary'
import CreateTokenUserControl from './controllers/users/CreateToken'
import KeepConnectUserControl from './controllers/users/KeepConnect'
import DeleteTokenUserControl from './controllers/users/DeleteToken'

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
const createTokenUserControl = new CreateTokenUserControl()
const keepConnectUserControl = new KeepConnectUserControl()
const deleteTokenUserControl = new DeleteTokenUserControl()

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
router.post('/users/createtoken', createTokenUserControl.handle)
router.post('/users/keepconnect', keepConnectUserControl.handle)
router.post('/users/deletetoken', deleteTokenUserControl.handle)

//scaleusers
router.put('/scaleuser/:Code', updateScaleUserControl.handle)
router.get('/scaleuser/:Email', readScaleUserControl.handle)
router.post('/scalesignup', createScaleUserControl.handle)
router.post('/scalesignin', signInScaleUserControl.handle)

export default router
