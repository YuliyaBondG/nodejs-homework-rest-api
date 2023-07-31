const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Yuliya:DvSL0bsBUxr7yvS9@cluster0.krvjw1l.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3001);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

//1
//SENDGRID_API_KEY=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

//2
//SENDGRID_API_KEY=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
