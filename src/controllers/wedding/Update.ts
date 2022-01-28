import { Request, Response } from 'express'
import UpdateWeddingService from '../../services/wedding/Update'

export default class UpdateWeddingControl {
  async handle(request: Request, response: Response) {
    const { Code } = request.params
    const { Birthday, Name, Year } = request.body

    const updateWeddingService = new UpdateWeddingService()

    const wedding = await updateWeddingService
      .execute(Code, { Birthday, Name, Year })
      .finally()

    return response.json(wedding)
  }
}
