export function rpsGame(pick) {
    /* Legend
    Pick Values
    0 = rock
    1 = paper
    2 = scissors

    return values
    0 = tie
    1 = win
    2 = loss
    */
    const values = ['Rock', 'Paper', 'Scissors'];
    const randPick = Math.floor(Math.random() * 3);
    let outcome = null;

    if (randPick === pick) {
        //tie
        outcome = 0;
        document.getElementById('outcome').innerHTML = "Outcome: Draw";
    } else if (((pick === 0) && (randPick === 2)) || ((pick === 1) && (randPick === 0)) || ((pick === 2) && (randPick === 1))) {
        //win
        document.getElementById('outcome').innerHTML = "Outcome: Win";
        outcome = 1;

    } else {
        //loss
        document.getElementById('outcome').innerHTML = "Outcome: Loss";
        outcome = 2;

    }
    document.getElementById('user-pick').innerHTML = "UserPick: " + values[pick];
    document.getElementById('rand-pick').innerHTML = "Computer Pick: " + values[randPick];
    return outcome;




}
export function update(wins, loss) {
    document.getElementById("wins-board").innerHTML = "Wins: " + wins + ",Losses: " + loss;

}