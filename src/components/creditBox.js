import React from 'react'

const creditBox = props => (
    <div className='credit-box'>
        <p className='credit-box__name'>
            {props.name}
        </p>
        <img  src={props.urlCreditImage} alt='person' className='credit-box__headshot'/>
    </div>
)
export default creditBox;