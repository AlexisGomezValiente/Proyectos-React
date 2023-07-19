import React from 'react';
import './Contador.css'

function Contador({numClics}) {
    return(
        <div className='container-contador'>
            <p className='numero'>{numClics}</p>
        </div>
    );
}

export default Contador;