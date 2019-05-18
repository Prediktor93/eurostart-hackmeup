const { json  } = require('micro')
module.exports = async (req, res) => {
  const body = await json(req)

  from = body.from;
  to = body.to;
  type = body.type;
  passengers = body.passengers;

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
  var today = yyyy + '/' + mm + '/' + dd;
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
    resultado = {'departureTData': today+","+Hora+":00", 'price':price, 'route':from+'-'+to};
    disponibles.push(resultado);
    Hora = Hora + deltaHora;
  }
  /* Formato de retorno
  [{
    departureTDate: '2019-05-19',
    price:20,
    route:'MAD-VAL'
    }]
    */
  res.end(JSON.stringify(disponibles));
}
