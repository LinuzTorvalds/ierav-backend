import moment from 'moment'

export default class BirthdayUserService {
  async execute(Birthday: string) {
    const today = new Date()

    const dateCompare = moment(today).format('DD-MM')

    if (dateCompare != Birthday) return false

    return true
  }
}
