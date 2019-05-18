const { json  } = require('micro')
//const { validate } = require("validate.js");

/*var constraints = {
  city: {
    presence: true,
    lenght: 3
  },
  nights: {
    presence: true,
    numericality: true
  },
  rooms:{
    presence: true,
    numericality: true
  }
}*/

module.exports = async (req, res) => {
  const body = await json(req)

  p_city = body.city;
  p_nights = body.nights;
  p_rooms = body.rooms;

 // validate (body, constraints);
  
  var hotels = [];
  var numberHotels = Math.floor(Math.random()*5)+1;
  for (var i=0; i<numberHotels; i++) {
      hotel_price = Math.floor(Math.random()*50)+10;
      hotels.push({"name": "Hotel "+i+" "+p_city, "price":hotel_price*p_rooms*p_nights});
  }

  res.end(JSON.stringify(hotels));
}

