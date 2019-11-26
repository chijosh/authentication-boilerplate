// const mongoPort = process.env.MONGO_PORT || 27017

const config = {
	dbUrl: `mongodb+srv://${process.env.DEV_DB_USERNAME}:${process.env.DEV_DB_PASSWORD}@${process.env.DEV_DB_URL}/${process.env.DEV_DB_NAME}?retryWrites=true&w=majority`,
}

export default config
