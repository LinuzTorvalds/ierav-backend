import { Request, Response } from 'express'
import SignUp from '../../services/user/SignUp'

export default class SignUpUserControl {
  async handle(request: Request, response: Response) {
    const { Name, Sex, MaritalStatus, Email, Password, Charge, Birthday } =
      request.body

    const signUp = new SignUp()

    const user = await signUp
      .execute({
        Name,
        Sex,
        MaritalStatus,
        Email,
        Password,
        Charge,
        Birthday,
      })
      .finally()

    return response.json(user)
  }
}
