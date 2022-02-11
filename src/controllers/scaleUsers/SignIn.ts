import { Request, Response } from 'express'
import SignInScaleUserService from '../../services/scaleUsers/SignIn'

export default class SignInScaleUserControl {
  async handle(request: Request, response: Response) {
    const { Email, Password } = request.body

    const signInScaleUserService = new SignInScaleUserService()

    const user = await signInScaleUserService.execute({ Email, Password })

    return response.json(user)
  }
}
