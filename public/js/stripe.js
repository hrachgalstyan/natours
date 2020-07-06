/* eslint-disable */
import axios from 'axios';
import {
    showAlert
} from './alerts';
const stripe = Stripe('pk_test_51H1tV3JC2od1bnwvP39DXQ54JSDvs3CXyWjAPbOWStSolFcrIQrJDS59QRDSiw1ZTwmtc3XBLkGI0NJGxDY54tAj00DMylDJJp');

export const bookTour = async tourId => {
    try {
        // 1) Get chekcout session from api
        const session = await axios(`http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`)
        // 2) Create checkout form + chanre credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        })

    } catch (error) {
        console.log(error);
        showAlert('error', error);
    }
}