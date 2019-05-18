const url = require('url')

const { json  } = require('micro')
module.exports = async (req, res) => {
  //const body = await json(req)
  let { query } = url.parse(req.url, true)
  console.dir(query)
  res.end("hello! " + query.from);
}
