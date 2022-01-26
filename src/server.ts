import app from './app'

const PORT = process.env.PORT

app.listen(PORT || 3001, () =>
  console.log(`Pai ta on familia o_O on PORT ${PORT}`)
)
