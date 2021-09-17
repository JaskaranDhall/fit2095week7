const express  = require('express');
const router = express.Router();
const teacher = require("./routes/teacherroute");


router.get('/list',teacher.getAll);
router.get('/list/:id',teacher.getOneById);
router.post('/add',teacher.addOne);


module.exports = router;