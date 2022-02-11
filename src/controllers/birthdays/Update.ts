import { Request, Response } from 'express'
import UpdateBirthdayService from '../../services/birthdays/Update'

export default class UpdateBirthdayControl {
  async handle(request: Request, response: Response) {
    const { Code } = request.params
    const { Birthday, Name } = request.body

    const updateBirthdayService = new UpdateBirthdayService()

    const wedding = await updateBirthdayService.execute(Code, {
      Birthday,
      Name,
    })

    return response.json(wedding)
  }
}
