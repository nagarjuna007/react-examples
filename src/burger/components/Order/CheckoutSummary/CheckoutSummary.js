import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className="text-center">
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled} className="btn btn-primary">CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued} className="btn btn-primary">CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;