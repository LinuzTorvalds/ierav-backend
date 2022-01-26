import app from './app'

app.listen(process.env.PORT || 3001, () =>
  console.log(`Pai ta on familia o_O on PORT ${process.env.PORT}`)
)
