import { Request, Response } from 'express'
import KeepConnectService from '../../services/users/KeepConnect'

export default class KeepConnectUserControl {
  async handle(request: Request, response: Response) {
    const { Token } = request.body

    const keepConnectService = new KeepConnectService()

    const user = await keepConnectService.execute({ Token }).finally()

    return response.send(user)
  }
}
