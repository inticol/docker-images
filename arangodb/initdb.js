var users = require('@arangodb/users')
const dbname = process.env.ARANGODB_DBNAME || 'test'
const username = process.env.ARANGODB_USERNAME || 'test_user'
const password = process.env.ARANGODB_PASSWORD || '1234'
db._createDatabase(dbname)
users.save(username, password)
users.grantDatabase(username, dbname)
