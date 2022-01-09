import { Request, Response } from 'express'
import SignIn from '../../services/user/SignIn'

export default class SignInUserControl {
  async handle(request: Request, response: Response) {
    const { Email, Password } = request.body

    const signIn = new SignIn()

    const user = await signIn.execute({ Email, Password }).finally()

    return response.json(user)
  }
}
