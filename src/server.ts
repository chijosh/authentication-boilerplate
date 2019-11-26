import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const app = express()

export default app

app.get('/', (req, res) => {
	res.status(200).json({message: 'Success'})
})
