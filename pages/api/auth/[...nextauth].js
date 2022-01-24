import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "../../../lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { MongooseAdapter } from "@choutkamartin/mongoose-adapter";

export default NextAuth({
  /* Either use the MongoDB adapter, initiate a
  cached MongoDB connection in /lib/mongodb.js
  and pass the connection to the adapter
  */
  adapter: MongoDBAdapter(clientPromise),

  /* Or use a self-made adapter such as the mine,
   which only requires you to pass in the connection string
   
  adapter: MongooseAdapter(process.env.MONGODB_URI),
  */
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  theme: {
    colorScheme: "light",
  },
  debug: false,
});
