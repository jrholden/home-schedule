
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:9194',
  'http://localhost',
  'http://holdensolutions.net',
  'https://holdensolutions.net'
]

const corsOptions = {
  origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
          callback(null, true)
      } else {
          callback(new Error('Not allowed by CORS'))
      }
  },
  Credential: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200,
}

export default corsOptions;