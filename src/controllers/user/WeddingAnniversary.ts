import { Request, Response } from 'express'
import WeddingBirthdayUserService from '../../services/user/WeddingAnniversary'

export default class WeddingBirthdayUserControl {
  async handle(request: Request, response: Response) {
    const { Code } = request.params

    const WeddingBirthday = new WeddingBirthdayUserService()

    const user = await WeddingBirthday.execute(Code).finally()

    if (user != false) return response.json(user)
    else return response.json('no')
  }
}
