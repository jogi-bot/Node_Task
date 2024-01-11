require("dotenv").config();
// FOR JOI
const students = [];

const createStudent = (req, res) => {
  const { name, birthday, mobileno } = req.body;
  const newStudent = { name, birthday, mobileno };

  students.push(newStudent);
  res.status(201).json(newStudent);
};

//crypto
const crypto = require("crypto");
const createhash = (req, res) => {
  const data = JSON.stringify(req.body);

  const hash = crypto.createHash("md5");

  hash.update(data);

  const MD5 = hash.digest("hex");
  res.status(201).json(MD5);
};

//FOR BCRYPT

const bcrypt = require("bcrypt");

const BCRYPT = (req, res, next) => {
  const { password } = req.body;
  bcrypt.hash(password, 6, (err, hash) => {
    if (err) {
      res.status(500).json({ error: "Error in hashing password" });
      return;
    }

    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error in comparing passwords" });
        return;
      }

      const response = {
        message: "Hashed password and password match",
        hash,
        result,
      };

      res.status(200).json(response);
    });
  });
};

//uuid
const uuid = (req, res) => {
  const { v4: uuidv4 } = require("uuid");
  const uuid = uuidv4();
  res.status(200).json({ uuid });
};

//moment
const moment = require("moment");

const handleMoment = (req, res) => {
  const { date } = req.body;

  const currentDate = moment();
  const currentDateString = currentDate.format("YYYY-MM-DD");

  const futureDate = moment(date).add(1, "day");
  const futureDateString = futureDate.format("YYYY-MM-DD");

  res.status(200).json({
    "Current date": currentDateString,
    "Future date": futureDateString,
  });
};

//jwt

const secretKey = process.env.secretKey;

const jwt = require("jsonwebtoken");
const tokenweb = (req, res) => {
  const payload = req.body;

  const alogrithm = {
    algorithm: "HS384",
  };
  const token = jwt.sign(payload, secretKey, alogrithm);

  res.status(200).json({ message: "Generated JWT:", token });

  jwt.verify(token, secretKey, (err, data) => {
    try {
      console.log(data);
    } catch {
      console.log(err);
    }
  });
};

//crypto

const { log } = require("console");

const decenc = (req, res) => {
  const text = JSON.stringify(req.body);
  const password = process.env.PASSWORD;

  function encrption(text, password) {
    const cipher = crypto.createCipher("aes-256-cbc", password);
    let encrption = cipher.update(text, "utf-8","hex");
    encrption += cipher.final("hex");
    return encrption;
  }

  function decrption(encryptedText, password) {
    const decipher = crypto.createDecipher("aes-256-cbc", password);
    let decrption = decipher.update(encryptedText, "hex","utf-8");
    decrption += decipher.final("utf-8");
    return decrption;
  }

  const encryptedText = encrption(text, password);

  const descrptedtext = decrption(encryptedText, password);
  res.status(200).json({ "encryptedText:": encryptedText, "decryptedtext": descrptedtext});
};



//email
const sendEmailController = (req, res) => {
  res.status(200).json({ message: 'Email sent successfully' });
};

//ejs
const ejs = (req, res) => {
  res.render('profile', {name:req.params.name});
}

module.exports = {
  createStudent,
  createhash,
  BCRYPT,
  uuid,
  handleMoment,
  tokenweb,
  decenc,
  sendEmailController,
  ejs
};
