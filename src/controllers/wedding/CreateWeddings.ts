import { Request, Response } from 'express'
import CreateWeddingsService from '../../services/wedding/CreateWeddings'

export default class CreateWeddingsControl {
  async handle(request: Request, response: Response) {
    const { Year, Description } = request.body

    const createWeddingsService = new CreateWeddingsService()

    const wedding = await createWeddingsService
      .execute({ Year, Description })
      .finally()

    return response.json(wedding)
  }
}
