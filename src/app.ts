import express from 'express'
import postgraphile from 'postgraphile'


const pgUser = 'admin'

/**
* This is our main entry point of our Express server.
* All the routes in our API are going to be here.
**/
const App = () => {
 const app = express()
 app.use(express.json())
 app.use(postgraphile(`postgresql://${pgUser}:${pgUser}@localhost/graphqltest_db`, 'public', {
   watchPg: true,
   graphiql: true,
   enhanceGraphiql: true,
 }))

 app.get('/api/v1/hello', async (req, res, next) => {
   res.send('success')
 }) 
  return app
}

export default App