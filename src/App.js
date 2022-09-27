import React from 'react';
import './App.css'
import { connect } from 'react-redux';
import { incNumber, decNumber } from './actions';
const App = ({data,decNumber,incNumber}) => {

    return (
        <>
            <div className="container">

                <h1>Welcome to Redux</h1>
                <h2>Increment/Decrement counter</h2>
                <h2>Using Redux React</h2>
                <div className="quantity">
                    <button className="quantity__minus" title="Decrement"
                        onClick={() => decNumber()}><span> - </span></button>
                    <input name="qunatity" type="text" className="quantity__input" value={data} />
                    <button className="quantity__plus" title="Increment"
                        onClick={() => incNumber()}><span>+</span></button>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => ({
    data: state.initialState
})
const actions = {
    incNumber,decNumber
}
export default connect(mapStateToProps,actions)(App);