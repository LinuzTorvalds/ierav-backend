import { Request, Response } from 'express'
import SignUpUserService from '../../services/users/SignUp'

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
      })
      .finally()

    return response.json(user)
  }
}
