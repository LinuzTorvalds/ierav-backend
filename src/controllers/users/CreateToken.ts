import { Request, Response } from 'express'
import CreateTokenService from './CreateToken'

export default class CreateTokenUserControl {
  async handle(request: Request, response: Response) {
    const { Email } = request.body

    const createTokenService = new CreateTokenService()

    const user = await createTokenService.execute({ Email }).finally()

    return response.send(user)
  }
}
