import { Request, Response } from 'express'
import BirthdayUserService from '../../services/users/Birthday'

export default class BirthdayUserControl {
  async handle(request: Request, response: Response) {
    const { Code } = request.params

    const birthday = new BirthdayUserService()

    const user = await birthday.execute(Code).finally()

    if (user == true) return response.json('0k')
    else return response.json('no')
  }
}
