export default class BirthdayUserService {
  async execute(Birthday: string) {
    const date = new Date()

    var today, thisMonth

    if (parseInt(date.getDate().toString()) <= 9)
      today = '0' + date.getDate().toString()
    else today = date.getDate().toString()

    if (parseInt((date.getMonth() + 1).toString()) <= 9)
      thisMonth = '0' + date.getMonth().toString()
    else thisMonth = date.getMonth().toString()

    const dateCompare = today + '-' + thisMonth

    if (dateCompare != Birthday) return false

    return true
  }
}
