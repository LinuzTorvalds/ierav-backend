import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import router from './routes'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(router)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error)
      return response.status(400).json({ error: err.message })

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    })
  }
)

export default app
