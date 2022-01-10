import moment from 'moment'

export default class WeddingBirthdayUserService {
  async execute(Wedding: string) {
    const today = new Date()

    const dateCompare = moment(today).format('DD-MM')

    if (dateCompare != Wedding) return false

    return true
  }
}
