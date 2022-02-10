import { Request, Response } from 'express'
import DeleteTokenService from '../../services/users/DeleteToken'

export default class DeleteTokenUserControl {
  async handle(request: Request, response: Response) {
    const { Email } = request.body

    const deleteTokenService = new DeleteTokenService()

    const user = await deleteTokenService.execute({ Email }).finally()

    return response.send(user)
  }
}
