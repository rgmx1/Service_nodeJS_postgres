const express = require("express");
const userRouter = require("./routes/user.routes");
//const petRouter = require("./routes/pet.routes");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/api", userRouter);
//app.use("/api", petRouter);

app.listen(PORT, () => console.log(`server started post on ${PORT}`));
