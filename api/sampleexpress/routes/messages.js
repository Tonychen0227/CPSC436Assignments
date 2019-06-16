var express = require('express');
var router = express.Router();

var messages = [{"text": "Hello world",
  "id": 1, "details": "Boo!"}, {"text": "Goodbye world",
  "id": 2, "details": "Foo!"}]

/* GET users listing. */
router.get('/', function(req, res, next){
  res.json(messages);
});

router.post('/', function(req, res, next) {
  messages.push(req.body);
  res.json(messages);
})

router.delete('/', function(req, res, next) {
  if (req.body == null || req.body.idToDelete == null) {
    messages = [];
  }
  else if (req.body.idToDelete != null){
    console.log(req.body.idToDelete === messages[0].id);
    messages = messages.filter( (item) => item.id !== req.body.idToDelete)
  }
  res.json(messages);
})

router.delete
module.exports = router;
