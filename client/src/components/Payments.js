//  library modules
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

//  local modules
import * as actions from '../actions';

//  define class
class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name="Emaily"
                description="$5.00 for 5 survey credits"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);