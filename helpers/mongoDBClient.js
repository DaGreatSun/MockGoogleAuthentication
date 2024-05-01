import { MongoClient } from 'mongodb'

let uri = process.env.MONGODB_URI
let dbName = process.env.MONGODB_DB

let cachedClient = null
let cachedDb = null

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

if (!dbName) {
  throw new Error('Please define the MONGODB_DB environment variable')
}

export async function connectToDatabase () {
  if (process.env.NODE_ENV == 'development') {
    if (global.cachedClient && global.cachedDb) {
      // console.log('reuse connection')
      return { client: global.cachedClient, db: global.cachedDb }
    }

    let client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    await client.connect()
    let db = await client.db(dbName)

    cachedClient = client
    cachedDb = db

    global.cachedClient = client
    global.cachedDb = db
    // console.log('new connection')
    return { client: global.cachedClient, db: global.cachedDb }
  } else {
    if (cachedClient && cachedDb) {
      // console.log("reuse connection");
      return { client: cachedClient, db: cachedDb }
    }

    let client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    await client.connect()
    let db = await client.db(dbName)

    cachedClient = client
    cachedDb = db
    // console.log("new connection");
    return { client: cachedClient, db: cachedDb }
  }
}

export async function aggregateToArray (db, collection, query) {
  try {
    const agg = db.collection(collection).aggregate(query)
    const doc = await agg.toArray()
    return doc
  } catch (error) {
    return null
  }
}

export async function findToArray (db, collection, query) {
  try {
    const f = db.collection(collection).find(query)
    const doc = await f.toArray()
    return doc
  } catch (error) {
    return null
  }
}
