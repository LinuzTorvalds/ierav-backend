import { Request, Response } from 'express'
import ReadUserService from '../../services/users/Read'

export default class ReadUserControl {
  async handle(request: Request, response: Response) {
    const { Email } = request.params

    const readUserService = new ReadUserService()

    const user = await readUserService.execute(Email).finally()

    return response.json(user)
  }
}
