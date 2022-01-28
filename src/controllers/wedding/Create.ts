import { Request, Response } from 'express'
import CreateWeddingService from '../../services/wedding/Create'

export default class CreateWeddingControl {
  async handle(request: Request, response: Response) {
    const { Birthday, Name, Year } = request.body

    const createWeddingService = new CreateWeddingService()

    const wedding = await createWeddingService
      .execute({ Birthday, Name, Year })
      .finally()

    return response.json(wedding)
  }
}
