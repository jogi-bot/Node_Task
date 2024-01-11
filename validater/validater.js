const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(20).required(),
  birthday: Joi.number().integer().min(1970).max(2023).required(),
  mobileno: Joi.number().integer().min(10).required()
});

const validateStudent = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};


const MDVALIDATE = (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(10).required(),
      
    });
  
    const { error } = schema.validate(req.body);
  
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  
    next();
  };


  
const becryptvalidation = (req, res, next) => {
    const schema = Joi.object({
      password: Joi.string().min(3).max(10).required(),
      
    });
  
    const { error } = schema.validate(req.body);
  
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  
    next();
  };
  const tokeninput = (req, res, next) => {
    const schema = Joi.object({
        userId: Joi.number().min(5).required(),
        username: Joi.string().min(3).max(10).required(),
        
      });
    
      const { error } = schema.validate(req.body);
    
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    
      next();
  }


  const date = (req, res, next) => {
    const schema = Joi.object({
        date: Joi.date().iso().required()
      });
  
    const { error } = schema.validate(req.body);
  
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };

  const decencvali = (req, res, next) => {
    const schema = Joi.object({
        text: Joi.string().min(3).max(10).required(),
        
      });
    
      const { error } = schema.validate(req.body);
    
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    
      next();
  }

//mail with
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', 
    pass: 'your-password'
  }
});

const sendEmail = (req, res, next) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com', 
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    } else {
      console.log('Email sent:', info.response);
      next();
    }
  });
};


module.exports = {
  validateStudent, MDVALIDATE, date,becryptvalidation,tokeninput,decencvali, sendEmail
};
