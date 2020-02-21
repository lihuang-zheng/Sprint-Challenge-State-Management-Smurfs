import React from "react"

const Smurfs = props => {

    return (
        <div className="smurfs-container">
            {props.smurfs.map(smurf =>
                <div key={smurf.id}>
                    <div className="smurfs">
                        <p>{smurf.name}</p>
                        <p>Height of {smurf.height}</p>
                        <p>Age of {smurf.age}</p>
                    </div>
                    <button onClick={() => props.remove(smurf.id)}>delete</button>
                </div>
            )}
        </div>
    )
}

export default Smurfs