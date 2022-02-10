import { Request, Response } from 'express'
import KeepConectService from '../../services/users/KeepConect'

export default class KeepConectUserControl {
  async handle(request: Request, response: Response) {
    const { Token } = request.body

    const keepConectService = new KeepConectService()

    const user = await keepConectService.execute({ Token }).finally()

    return response.send(user)
  }
}
