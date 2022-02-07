import { Request, Response } from 'express'
import SignInUserService from '../../services/users/SignIn'

export default class SignInUserControl {
  async handle(request: Request, response: Response) {
    const { Email, Password } = request.body

    const signInUserService = new SignInUserService()

    const user = await signInUserService.execute({ Email, Password }).finally()

    return response.json(user)
  }
}
