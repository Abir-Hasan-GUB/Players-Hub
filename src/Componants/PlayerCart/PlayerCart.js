import React from 'react';
import './PlayerCart.css';

const PlayerCart = (props) => {
    // console.log(props)
    const {name, age, salary, img, handlePlayerAdd} = props;
    return (
        <div class="card-deck mb-3 mt-1">
            <div class="card playersDiv">
                <div className="row">
                    <div className="col-md-4 playerPictureDiv">
                        <img className="img-fluid playerPicture" src={img} alt={name}/>
                    </div>
                    <div className="col-md-8 cartDetails mb-3 p-3">
                        <h4 className="name mt-1">{name}</h4>
                        <h5 className="age mt-2">Age: {age}</h5>
                        <h6 className="salary mt-1">Salary: $ {salary}</h6>
                        <button 
                        onClick={()=>handlePlayerAdd(props)}
                         className="button btn btn-info mt-3">Add Player</button>
                        <br/>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default PlayerCart;