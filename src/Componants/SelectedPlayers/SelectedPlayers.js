import React, { useState } from 'react';
import './SelectedPlayers.css';

const SelectedPlayers = (props) => {
    const players = props.player;

    return (
        <div>
            {
                players.length === 0 && <h4 className ="noSelectMSG text-center mt-3">No Player Selected !</h4>
            }
            {players.length > 0 &&<table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                {
                    players.map((player) => <tbody>
                    <tr>
                        <td>{player.name}</td>
                        <td>$ {player.salary}</td>
                    </tr>

                </tbody>)
                }
                <tr>
                        <th scope="col">Total Budget</th>
                        <th scope="col">$ {props.totalBugded}</th>
                    </tr>
            </table>}
        </div>
    );
};

export default SelectedPlayers;