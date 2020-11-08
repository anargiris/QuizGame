const SubmitBtn = document.getElementById('submit-btn');
const playerName = document.getElementById('name-input');
let database = firebase.database();
const rootRef = database.ref('users')
let highscores =[];
let leaderboardBtn = document.getElementById('scores');
let scorelist = document.getElementById('scorelist');
let leaderboardsDiv = document.getElementById('leaderboards');

SubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    leaderboardsDiv.style.display = 'none';
    Home.style.display = 'block';
    endDiv.style.display = 'none';
    AnswersDiv.style.display = 'none';
    rootRef.push({
        name: playerName.value,
        score: score
    });
})

leaderboardBtn.addEventListener('click', showLeaderboard)


//manipulating the data
rootRef.on('value', gotData, errData);
function gotData(datas){
    highscores =[];
    let scores = datas.val();
    let keys = Object.keys(scores);
    for (let i=0; i<keys.length; i++){
        let k = keys[i];
        let name = scores[k].name;
        let score = scores[k].score;
        highscores.push({name,score})
    }
    highscores.sort((a,b) => b.score - a.score);
    if (highscores.length > 20){
        highscores.pop();
        highscores = highscores.slice(1,21)
    }
    return highscores;
};  

function errData(){
    console.log('ERROR');
    console.log(err);
}


function showLeaderboard(){
    while(scorelist.firstChild){
        scorelist.removeChild(scorelist.firstChild);
    }
    leaderboardsDiv.style.display = 'block';
    Home.style.display = 'none';
    QuestionsDiv.style.display = 'none';
    AnswersDiv.style.display = 'none';
    for (let i=0; i<highscores.length; i++){
        let scorePlace = document.createElement('li');
        scorePlace.innerHTML = `<span id="rank">${i+1}</span>.  <span id="player-name">${highscores[i].name}</span>   :   ${highscores[i].score} `;
        scorelist.appendChild(scorePlace);
    }
}