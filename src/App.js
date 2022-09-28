import React from 'react';
import './App.css'
import { connect } from 'react-redux';
import { incNumber, decNumber ,multNumber,divNumber} from './actions';
import mulTheNumber from './reducers/mulDiv';
const App = ({data,decNumber,incNumber,multNumber,divNumber,mulTheNumber}) => {

    return (
        <>
            <div className="container">

                <h1>Welcome to Redux</h1>
                <h2>Increment/Decrement counter</h2>
                <h2>Using Redux React</h2>
                <div className="quantity">
                    <button className="quantity__minus" title="Decrement"
                        onClick={() => decNumber(1)}><span> - </span></button>
                    <input name="qunatity" type="text" className="quantity__input" value={data} />
                    <button className="quantity__plus" title="Increment"
                        onClick={() => incNumber(1)}><span>+</span></button>
                </div>
            </div>


            <div className="container">

            <h1>Welcome to Redux</h1>
            <h2>Multiply/Divide counter</h2>
            <h2>Using Redux React</h2>


            <div className="quantity">
                
            <button className="quantity__minus" title="Divide"
            onClick={() => divNumber(2)}><span> / </span></button>
            <input name="qunatity" type="text" className="quantity__input" value={mulTheNumber} />
            <button className="quantity__plus" title="Multiply"
            onClick={() => multNumber(5)}><span> * </span></button>
     </div>
   </div>
            
        </>
    )
}
const mapStateToProps = state => ({
    data: state.changeTheNumber,
    mulTheNumber:state.mulTheNumber
})
const actions = {
    incNumber,decNumber,divNumber,multNumber
}
export default connect(mapStateToProps,actions)(App);