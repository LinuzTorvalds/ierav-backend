import { Request, Response } from 'express'
import CreateBirthdayService from '../../services/birthdays/Create'

export default class CreateBirthdayControl {
  async handle(request: Request, response: Response) {
    const { Birthday, Name } = request.body

    const createBirthdayService = new CreateBirthdayService()

    const birthday = await createBirthdayService.execute({ Birthday, Name })

    return response.json(birthday)
  }
}
