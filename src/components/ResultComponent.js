import React from 'react';
import {col} from 'reactstrap';

function Result(props) {
    return (
        <div className="result">
            <p className="col" id="answer" > {props.result}</p>
        </div>
    );
}
export default Result;