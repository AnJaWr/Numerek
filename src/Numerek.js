import React, { Component} from "react";
import './App.css';
import { Row, Col } from 'react-grid-system';

class Numerek extends Component {
    state={
        value: 0,
        chosenOne: 0,
    }

handleClick = () => {
if (this.state.value > 0){
    let min = 1;
    let max = this.state.value;
    let chosen = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({
        chosenOne: chosen
    })
}
    }
    render() {
        return(

            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Row align="center" justify="center" >
                    
<label>Podaj liczbę nieszczęśników: </label>
<input type="number" value={this.state.value} min={0} onChange={(e)=> {
        this.setState({ value: e.target.value})
    }}/>
</Row>
                <Row justify="start" debug>
                    <Col xs={12} sm={7} md={6} lg={6} xl={6}>
                        <div className="button">
    <button onClick={this.handleClick}>Wskaż ofiarę</button></div></Col>
                    {this.state.chosenOne ? <Col xs={12} sm={4} md={6} lg={6} xl={6}><div className="ofiara">{this.state.chosenOne}</div></Col> : null}
</Row>
       </Col>
        )

    }
}
export default Numerek;