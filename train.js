const { json  } = require('micro')
const { validate } = require("validate.js");

// Check that every field exists in the body message
function validateInput(body){
  if( 'from' in body && 
      'to'   in body &&
      'type' in body &&
      'passengers' in body){
    return true;
  }else{
    return false;
  }
}

var constraints = {
  from: {
    presence: true,
    numericality: false,
  },
  to: {
    presence: true,
    numericality: false,
  },
  type:{
    presence: true,
    numericality: false,
  },
  passengers:{
    presence:true,
    numericality: true,
  }
}

// Obtiene la fecha actual en formato 'yyyy-mm-dd'
function getDateToday(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  } 
  if (mm < 10) {
    mm = '0' + mm;
  } 
  return yyyy + '/' + mm + '/' + dd;
}

module.exports = async (req, res) => {
  const body = await json(req)
  
  validate.async(body, constraints).then(
    function () { // SUCCESS
      from = body.from;
      to = body.to;
      type = body.type;
      passengers = body.passengers;

      var disponibles = [];

      num_resultados = Math.floor((Math.random()*2))+2;

      deltaHora = Math.floor(24/num_resultados);
      Hora = 0;

      for(var i = 0; i < num_resultados; i++){
            
        //Calculamos el precio
        if( type == "IDA"){
            price = passengers*10.0;
        }else{
            price = passengers*15.0;
        }

        sHora = Hora;
        if(sHora < 10){ sHora = "0"+Hora;}

        resultado = {'departureTData': getDateToday()+","+Hora+":00", 'price':price, 'route':from+'-'+to};
        disponibles.push(resultado);

        // Mock para calcular la nueva hora
        Hora = Hora + deltaHora;
      }
      res.end(JSON.stringify(disponibles));
    },
    function (){ // Error
      res.status = 400;
      res.end('Datos no validos.');
    });
}
