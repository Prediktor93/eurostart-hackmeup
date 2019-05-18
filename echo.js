const { json  } = require('micro')
module.exports = async (req, res) => {
  const body = await json(req)
  res.end("hello!"+ body.username);
}
