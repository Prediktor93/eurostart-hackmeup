const url = require('url')
const data = {
  '123ASD/TestUser': {
    id: '123ASD',
    name: 'Test',
    lastName: 'User',
    type: 'HOTEL',
    total: '123'
  }
}

module.exports = async (req, res) => {
  let { query } = url.parse(req.url, true)
  res.setHeader('Content-Type', 'application/json')
  if (!query || !query.booking || !query.name) {
    res.statusCode = 400;
    res.end(JSON.stringify(new Error('validation:invalid_params')));
    return;
  }

  const userData = data[query.booking+'/'+query.name];
  if (!userData) {
    res.statusCode = 404;
    res.end(JSON.stringify(new Error('USER_NOT_FOUND')));
  }
  res.end(JSON.stringify(userData));
}
