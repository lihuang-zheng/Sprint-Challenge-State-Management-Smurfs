import React, { useState } from "react"

// import connect to the store
import { connect } from "react-redux"

// import post smurf to add smurf
import { postSmurf } from "../actions"


const AddSmurf = props => {
    const [name, setName] = useState()
    const [height, setHeight] = useState()
    const [age, setAge] = useState()


    const handleName = e => {
        setName(e.target.value)
    }
    const handleHeight = e => {
        setHeight(e.target.value)
    }
    const handleAge = e => {
        setAge(e.target.value)
    }
    const handleClick = e => {
        props.postSmurf({
            name: name,
            height: height,
            age: age,
            id: newID
        })

        setName("")
        setHeight("")
        setAge("")

        console.log(newID)
    }

    return (
        <div className="form">
            <h3>Here you can add smurfs</h3>

            <input
                className="input"
                type="text"
                name="newName"
                placeholder="Name"
                value={name}
                onChange={handleName}
            />

            <input
                className="input"
                type="text"
                name="newHeight"
                placeholder="height (cm)"
                value={height}
                onChange={handleHeight}
            />

            <input
                className="input"
                type="text"
                name="newAge"
                placeholder="age (years)"
                value={age}
                onChange={handleAge}
            />

            <button onClick={handleClick}>
                Add Smurf
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    { postSmurf }
)(AddSmurf)