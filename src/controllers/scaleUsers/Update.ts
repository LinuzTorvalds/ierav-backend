import { Request, Response } from 'express'
import UpdateScaleUserService from '../../services/scaleUsers/Update'

export default class UpdateUserControl {
  async handle(request: Request, response: Response) {
    const { Code } = request.params
    const { Name, Email, Password, Departament } = request.body

    const updateScaleUserService = new UpdateScaleUserService()

    await updateScaleUserService
      .execute(Code, {
        Name,
        Email,
        Password,
        Departament,
      })
      .finally()

    return response.status(201).send('successfully updated :D')
  }
}
