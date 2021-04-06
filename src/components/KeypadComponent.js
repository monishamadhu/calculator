import React from 'react';
import { Button } from 'reactstrap';

function Keypad(props) {
    return (
        <div id="buttons">

            <div className="row">
                <Button className="col-6" color='danger' id="reset" name='AC' onClick={ev => props.onClick(ev.target.name)}>AC</Button>
                <Button className="col-3" id="divide" name='/' onClick={ev => props.onClick(ev.target.name)}>/</Button>
                <Button className="col-3" id="multiply" name='*' onClick={ev => props.onClick(ev.target.name)}>*</Button> <br />
            </div>

            <div className="row">
                <Button className="col-3" id="seven" name='7' onClick={ev => props.onClick(ev.target.name)}>7</Button>
                <Button className="col-3" id="eight" name='8' onClick={ev => props.onClick(ev.target.name)}>8</Button>
                <Button className="col-3" id="nine" name='9' onClick={ev => props.onClick(ev.target.name)}>9</Button>
                <Button className="col-3" id="subtract" name='-' onClick={ev => props.onClick(ev.target.name)}>-</Button> <br />
            </div>

            <div className="row">
                <Button className="col-3" id="four" name='4' onClick={ev => props.onClick(ev.target.name)}>4</Button>
                <Button className="col-3" id="five" name='5' onClick={ev => props.onClick(ev.target.name)}>5</Button>
                <Button className="col-3" id="six" name='6' onClick={ev => props.onClick(ev.target.name)}>6</Button>
                <Button className="col-3" id="add" name='+' onClick={ev => props.onClick(ev.target.name)}>+</Button> <br />
            </div>

            <div className="row">
                <Button className="col-3" id="one" name='1' onClick={ev => props.onClick(ev.target.name)}>1</Button>
                <Button className="col-3" id="two" name='2' onClick={ev => props.onClick(ev.target.name)}>2</Button>
                <Button className="col-3" id="three" name='3' onClick={ev => props.onClick(ev.target.name)}>3</Button>
                <Button className="col-3" id="equals" name='=' onClick={ev => props.onClick(ev.target.name)}>=</Button> <br />
            </div>

            <div className="row">
                <Button className="col-6" id="zero" name='0' onClick={ev => props.onClick(ev.target.name)}>0</Button>
                <Button className="col-3" id="decimal" name='.' onClick={ev => props.onClick(ev.target.name)}>.</Button>
                <Button className="col-3" color='primary' id="backspace" name='C' onClick={ev => props.onClick(ev.target.name)}>C</Button>
            </div>

        </div>
    );
}
export default Keypad;

