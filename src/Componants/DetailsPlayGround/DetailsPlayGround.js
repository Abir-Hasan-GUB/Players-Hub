import React, { useState } from 'react';
import FakeData from '../FakeData/FakeData';
import PlayerCart from '../PlayerCart/PlayerCart';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import './DetailsPlayGround.css';

const DetailsPlayGround = () => {
    const [item, setItem] = useState(FakeData);
    const [players, setPlayers] = useState([]);
    console.log(players);

    const handlePlayerAdd = (player) => {
        const newPlayer = [...players, player];
        setPlayers(newPlayer);
    }

    // ============ Calculations =================
    let totalBugded = 0;
    for(let i = 0; i < players.length; i++) {
        totalBugded += players[i].salary;
    }
    console.log(totalBugded);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
    
                        {
                        item.map(item => <PlayerCart 
                        name = {item.name}
                        age = {item.age}
                        img = {item.img}
                        salary = {item.salary}
                        handlePlayerAdd = {handlePlayerAdd}
                        >
                        </PlayerCart>)
                    }
                   
                </div>
                <div className="col-md-3 playersListWithDetails">
                    <div className="row">
                        <div className="col-md-12">
                        <h5 className="text-center mt-3">Selected  Players Details</h5>
                        </div>
                        <div className="col-md-12">
                            <h6 className="text-center mt-2 mb-3">Selected Players: {players.length}</h6>
                            <div className="col-md-12">
                                <SelectedPlayers
                                 player = {players}
                                 totalBugded = {totalBugded}
                                 ></SelectedPlayers>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPlayGround;