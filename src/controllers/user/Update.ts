import { Request, Response } from 'express'
import UpdateUserService from '../../services/user/Update'

export default class UpdateUserControl {
  async handle(request: Request, response: Response) {
    const { Code } = request.params
    const {
      Name,
      Sex,
      MaritalStatus,
      Email,
      Password,
      Birthday,
      WeddingAnniversary,
    } = request.body

    const updateUserService = new UpdateUserService()

    await updateUserService
      .execute(Code, {
        Name,
        Sex,
        MaritalStatus,
        Email,
        Password,
        Birthday,
        WeddingAnniversary,
      })
      .finally()

    return response.status(201).send('successfully updated :D')
  }
}
