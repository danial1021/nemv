const router = require('express').Router()
const createError = require('http-errors')
const multer = require('multer')

router.post('/', multer({ dest: 'public/'}).single('bin'), (req, res, next) => {
  // multer 를 통해서 req.file을 미들웨어에서 변환시켜서 파일로 줌
  console.log(req.body)
  console.log(req.file)

  res.status(204).send()
})

module.exports = router;
