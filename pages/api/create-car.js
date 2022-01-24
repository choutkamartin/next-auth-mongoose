import dbConnect from "../../lib/mongoose";
import Car from "../../models/Car";

export default async function handler(req, res) {
  return new Promise(async (resolve) => {
    const { brand } = req.query;
    /** Using the MongoDB adapter or the Mongoose one doesn't matter
     *  as you have to always initiate a connection when using the
     *  API routes. Zou have to initiate a connection via Mongoose
     *  if you wish to use your models
     */
    await dbConnect();
    Car.create({ name: brand }, function (err, car) {
      if (err) {
        console.error(err);
        return resolve();
      }
      res.json("Created a record in the database " + car);
      return resolve();
    });
  });
}
