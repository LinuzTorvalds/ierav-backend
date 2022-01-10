import { Request, Response } from 'express'
import BirthdayUserService from '../../services/user/Birthday'

export default class BirthdayUserControl {
  async handle(request: Request, response: Response) {
    const { Birthday } = request.params

    const birthday = new BirthdayUserService()

    const user = await birthday.execute(Birthday).finally()

    if (user == true) return response.json('0k')
    else return response.json('no')
  }
}
