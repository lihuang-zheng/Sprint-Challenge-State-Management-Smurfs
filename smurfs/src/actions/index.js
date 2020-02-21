import axios from "axios"

// insure the naming is correct
export const GET_SMURF_DATA = "GET_SMURF_DATA"
export const POST_SMURF = "POST_SMURF"
export const REMOVE_SMURF = "REMOVE_SMURF"

// get smurf data from server with axios
export const getSmurfData = () => dispatch => {
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => dispatch({
            type: GET_SMURF_DATA,
            payload: res.data
        })
        )
        .catch(err => {
            console.log(err)
        })
}

// post smurf data to server with axios
export const postSmurf = item => dispatch => {
    axios
        .post("http://localhost:3333/smurfs", {
            name: item.name,
            height: item.height,
            age: item.age,
            id: item.id
        })
        .then(dispatch({
            type: POST_SMURF,
            payload: item
        })
        )
        .catch(err => {
            console.log(err)
        })
}

// remove a smurf from the server with axios
export const removeSmurf = id => dispatch => {
    axios
        .delete("http://localhost:3333/smurfs/${id}")
        .then(console.log(id))
        .then(dispatch({
            type: REMOVE_SMURF,
            payload: id
        })
        )
        .catch(err => {
            console.log(err)
        })
}