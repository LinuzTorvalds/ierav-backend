import { Request, Response } from 'express'
import SignUpUserService from '../../services/user/SignUp'

export default class SignUpUserControl {
  async handle(request: Request, response: Response) {
    const {
      Name,
      Sex,
      MaritalStatus,
      Email,
      Password,
      Charge,
      Birthday,
      WeddingAnniversary,
      Year,
    } = request.body

    const signUpUserService = new SignUpUserService()

    const user = await signUpUserService
      .execute({
        Name,
        Sex,
        MaritalStatus,
        Email,
        Password,
        Charge,
        Birthday,
        WeddingAnniversary,
        Year,
      })
      .finally()

    return response.json(user)
  }
}
