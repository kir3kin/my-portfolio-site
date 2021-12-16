import { Sequelize } from 'sequelize'
import config from 'config'

export const sequelize = new Sequelize(
	config.get('DB_NAME'),
	config.get('DB_USER'),
	config.get('DB_PASSWORD'),
	{
		dialect: 'mysql',
		host: config.get('DB_HOST'),
		port: config.get('DB_PORT'),
		logging: false
	}
)

export const checkDB = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
	} catch (e) {}
}


