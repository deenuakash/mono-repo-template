import session from "express-session";
import connectMongoDBStore from "connect-mongodb-session";

const MongoDBStore = connectMongoDBStore(session);

const store = new MongoDBStore({
  uri: process.env.CONNECTION,
  collection: "sessions",
});

store.on("error", () => {
  message: "Error connecting to Store";
});

export default store;
