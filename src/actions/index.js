import { INCREMENT,DECREMENT,MULT,DIVIDE } from "./types"
export const incNumber = (value) => {
    //console.l
    return{
    type:INCREMENT,
    payload:value
    }
}
export const decNumber = (value) => {
    return{
    type:DECREMENT,
    payload:value
 }

}
export const multNumber = (value) => {
    return{
    type:MULT,
    payload:value
    }
}
export const divNumber = (value) => {
    return{
    type:DIVIDE,
    payload:value
 }

}