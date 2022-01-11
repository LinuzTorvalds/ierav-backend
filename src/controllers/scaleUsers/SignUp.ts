import { Request, Response } from 'express'
import SignUpScaleUserService from '../../services/scaleUsers/SignUp'

export default class SignUpScaleUserControl {
  async handle(request: Request, response: Response) {
    const { Name, Email, Password, Departament } = request.body

    const signUpScaleUserService = new SignUpScaleUserService()

    const user = await signUpScaleUserService
      .execute({
        Name,
        Email,
        Password,
        Departament,
      })
      .finally()

    return response.json(user)
  }
}
