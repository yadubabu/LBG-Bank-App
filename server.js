const express = require("express");
const mongoose = require("mongoose");
const data = require("./data/allAccount.json");
const AccountSchema = require("./models/accountSchema");
const bodyparser = require("body-parser");
const RegisterSchema = require("./models/userModel");

const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

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
app.post("/adduser", async (req, res) => {
  const { name, email, pancard, password, confirmpassword } = req.body;
  try {
    const newUser = new RegisterSchema({
      name,
      email,
      pancard,
      password,
      confirmpassword,
    });
    await newUser.save();
    return res.json(await RegisterSchema.find());
  } catch (err) {
    console.log(err);
  }
});
app.get("/getuser", async (req, res) => {
  try {
    return res.json(await RegisterSchema.find());
  } catch (err) {
    console.log(err);
  }
});
app.get("/getallaccounts", async (req, res) => {
  try {
    return await res.json(data);
  } catch (err) {
    console.log(err);
  }
});

app.post("/addaccount", async (req, res) => {
  const {
    name,
    email,
    pancard,
    bankName,
    AccountType,
    FixedDeposits,
    Balance,
  } = req.body;
  try {
    const newAcc = new Accounts({
      name: name,
      email: email,
      pancard: pancard,
      bankName: bankName,
      AccountType: AccountType,
      FixedDeposits: FixedDeposits,
      Balance: Balance,
    });
    await newAcc.save();
    return res.json(await AccountSchema.find());
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => console.log("App Running on 5000"));
