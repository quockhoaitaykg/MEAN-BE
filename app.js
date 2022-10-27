const express = require("express");
const app = express();
const mongoose = require("mongoose");
const typeRouter = require("./routes/TypeRoute");
const equipmentRouter = require("./routes/EquipmentRoute");
const empRouter = require("./routes/EmployeeRoute");
 
//middleware
app.use(express.json());
app.use("/api/types", typeRouter);
app.use("/api/equipments", equipmentRouter);
app.use("/api/employee", empRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});


//configure mongoose
const URI = "mongodb+srv://quocnx:quoc1999@cluster1.gzfzc9w.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(
 URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
 
module.exports = app;