import React from 'react';
import './rps.css';
import { rpsGame } from '../rpsAlgs/rps';
import { update } from '../rpsAlgs/rps';



export default class RpsBot extends React.Component{

    constructor(props){

        super(props);
        this.wins =0;
        this.loss =0;

        
    }

    gameStart(pick){
        console.log("Pick"+pick);
        var outcome= rpsGame(pick);
        if(outcome === 1){
            this.wins++;
        }else if(outcome === 2){
            this.loss++;
        }
        update(this.wins,this.loss);
        
        
    }




    render(){
        
        return(
            <><div className='picks-container'>
                <h1 id='user-pick'>UserPick:</h1>
                <h1 id = 'rand-pick'>Computer Pick:</h1>
                <h1 id = 'outcome'>Outcome: </h1>
            </div>
            <div className='game-buttons'>{<><button onClick={() => this.gameStart(0)}>rock</button><button onClick={() => this.gameStart(1)}>paper</button><button onClick={() => this.gameStart(2)}>scissors</button></>}

            </div>
            <div className='results'>
                <h1 id="wins-board">Wins: 0, Losses:0</h1>

            </div>
            </>
        )
    };

}
