import { Request, Response } from 'express'
import ReadScaleUserService from '../../services/scaleUsers/Read'

export default class ReadScaleUserControl {
  async handle(request: Request, response: Response) {
    const { Email } = request.params

    const readScaleUserService = new ReadScaleUserService()

    const user = await readScaleUserService.execute(Email).finally()

    return response.json(user)
  }
}
