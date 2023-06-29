const express = require("express");
const mongoose = require("mongoose");
const data = require("./data/allAccount.json");
const { Accounts } = require("./models/Accounts");

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://mohini:mohinimohini@cluster0.sqdke.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Connected"));

app.get("/", async (req, res) => {
  res.send("Hello World");
});
app.get("/getallaccounts", async (req, res) => {
  try {
    return await res.json(data);
  } catch (err) {
    console.log(err);
  }
});

app.post("/addaccount", async (req, res) => {
  try {
    const newAcc = new Accounts({
      name: "mohini",
      email: "mohini@gmail.com",
      pancard: "ABCDEFGHIJ",
      bankName: "SBI",
      AccountType: "Salary",
      FixedDeposits: 2,
      Balance: 430000,
    });
    await newAcc.save();
    return res.json(await Accounts.find());
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => console.log("App Running on 5000"));
