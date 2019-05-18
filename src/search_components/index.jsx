import React from 'react'

class TrainSearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {type: '', travels : []}
    }


    updateButtons(value){
        if(value == 'VUELTA'){
            document.getElementById('retBtn').className='btn col-6 btn-primary';
            document.getElementById('oneWay').className='btn col-6 btn-outline-primary';
        }else{
            document.getElementById('retBtn').className='btn col-6 btn-outline-primary';
            document.getElementById('oneWay').className='btn col-6 btn-primary';
        }
    }
    
    setTravelType(val){
        this.setState({type : val});
        this.updateButtons(val);
    }
    
    async getTrainSearch(){
        let traininfo={
            from : document.getElementById("from").value,
            to : document.getElementById("to").value,
            passengers:document.getElementById("passengers").value,
            type : this.state.type
        }

        const url = "/train"
        const data =  await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(traininfo)
        })
        .then(function (res) {
            return res.text()
        })
        .then(function (val) {
            console.log(JSON.parse(val))
            return JSON.parse(val);
        })
        .catch(function (err) {
            // TODO Send logs to an aggregation service
            console.dir(err)
        })

        this.setState({travels : data})
    }

    render() {
        return (
        <div id="airportSelectionContainer" class="form-group">
            <div class="form-group row">
                <button onClick={() => this.setTravelType('VUELTA')} class="btn btn-outline-primary col-6" id="retBtn">Return</button>
                <button onClick={() => this.setTravelType('IDA')} class="btn btn-outline-primary col-6" id="oneWay">One Way</button>
            </div>
            <div class="form-group row">
                <input id="from" class="col-6" placeholder="City or station" name="from" type="text"></input>
                <input id="to" class="col-6" placeholder="City or station" name="to" type="text"></input>
            </div>
            <div class="form-group row">
                <input id="passengers" class="col-12" placeholder="Number of passengers" name="when" type="number"></input>
            </div>
            <div class="form-group row text-center">
                <button onClick={() => this.getTrainSearch()} class="col-6 mx-auto" onclick="getTrainSearch()">Search</button>
            </div>

            <br></br>
            <div>
                {this.state.travels.length > 0 ?
                <table  class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Ruta</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.travels.map(item => (
                        <tr>
                            <th key={item.route}>{item.route}</th>  
                            <th key={item.departureTData}>{item.departureTData}</th>
                            <th key={item.price}>{item.price} €</th>
                        </tr>
                    ))}
                    </tbody>
                </table> : <hr></hr>}
            </div>

    </div>)
    }
}
export default TrainSearchForm