const e = require("express");
const router = e.Router();

const app = e();
const Controller = require("../contoller.js/controller");
const  Validator  = require("../validater/validater");


router.post("/joi", Validator.validateStudent, Controller.createStudent);
router.post('/MD5', Validator.MDVALIDATE, Controller.createhash )
router.post('/brypt', Validator.becryptvalidation,Controller.BCRYPT)
router.post('/uuid', Controller.uuid)
router.post('/moment', Validator.date, Controller.handleMoment)
router.post('/jwt', Validator.tokeninput, Controller.tokenweb )
router.post('/crpto', Validator.decencvali, Controller.decenc)
router.post('/mail', Validator.sendEmail , Controller.sendEmailController)
app.set('view engine', 'ejs');
router.get('/profile/:name',Controller.ejs)













module.exports = router;
