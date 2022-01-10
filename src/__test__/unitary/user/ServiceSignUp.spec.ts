import { hash } from 'bcryptjs'
import moment from 'moment'
import SignUpUserService from '../../../services/user/SignUp'

let signUpUserService: SignUpUserService

describe('Sign up user', () => {
  beforeAll(() => {
    signUpUserService = new SignUpUserService()
  })

  it('should be able to create a new user', async () => {
    let passwordHash = await hash('123', 8)

    const user = await signUpUserService.execute({
      Name: 'test',
      Sex: 'M',
      MaritalStatus: 'solteiro',
      Email: 'test@gmail.com',
      Password: passwordHash,
      Charge: 'membro',
      Birthday: '26-03-2003',
    })

    expect(user).toHaveProperty('code')
  })

  it('should not be able to create an existing user', async () => {
    await signUpUserService.execute({
      Name: 'test existing',
      Sex: 'M',
      MaritalStatus: 'solteiro',
      Email: 'testexisting@gmail.com',
      Password: '123',
      Charge: 'membro',
      Birthday: '27-03-2003',
    })

    await expect(
      signUpUserService.execute({
        Name: 'test existing',
        Sex: 'M',
        MaritalStatus: 'solteiro',
        Email: 'testexisting@gmail.com',
        Password: '123',
        Charge: 'membro',
        Birthday: '2003-03-26',
      })
    ).rejects.toEqual(new Error('User already exists'))
  })
})
