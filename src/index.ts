import app from './server'
import connectDb from './services/db'

const server = app.listen('3000', () => {
	console.log('Server running on:', '3000')
})

connectDb()
	.then(() => {
		console.log('DB connected')
	})
	.catch(() => {
		console.log('DB not connected')
	})

process.on('unhandledRejection', e => {
	server.close(() => {
		process.exit(1)
	})
})
