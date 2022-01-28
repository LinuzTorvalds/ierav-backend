import { Request, Response } from 'express'
import UpdateWeddingsService from '../../services/wedding/UpdateWeddings'

export default class UpdateWeddingsControl {
  async handle(request: Request, response: Response) {
    const { Year } = request.params
    const { Description } = request.body

    const updateWeddingsService = new UpdateWeddingsService()

    const wedding = await updateWeddingsService
      .execute(Year, { Description })
      .finally()

    return response.json(wedding)
  }
}
