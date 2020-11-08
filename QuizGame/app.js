const question = document.getElementById("question-text");
const Answers = document.querySelectorAll('.answers .btn');
const StrBtn = document.getElementById('btn-start');
const QuestionsDiv = document.querySelector('.question');
const AnswersDiv = document.querySelector('.answers');
const Home = document.querySelector('.start-screen');
let ImgDiv = document.getElementById('img-place');
let playerScore = document.getElementById('player-score');
let endScore = document.getElementById('player-score-end');
let endDiv = document.getElementById('end-screen');
const scoresBtn = document.getElementById('scores');
const homeBtn = document.getElementById('homeback').addEventListener('click', ()=> {
    Home.style.display = 'block';
    QuestionsDiv.style.display = 'none';
    AnswersDiv.style.display = 'none';
    leaderboardsDiv.style.display ='none';
})

let timer;
let index=0;
var score=0;
let steps=0;

//Setting up the game

StrBtn.addEventListener("click", game);

//Questions
const EasyQuestions = [
    Question1 = {
        text: "Which tech company published the iPhone?",
        A: 'Microsoft',
        B: 'Apple',
        C: 'Google',
        D: 'Tencent',
        answer(){
            return this.B
        },
        isTaken : false,
        info: 'Apple changed the way we use our phones forever with iPhone.',
        img: "imgs/iphone-1.jpg"
    },
    Question2 = {
        text: "In which position David Beckham played",
        A: 'Goalkeeper',
        B: 'Defender',
        C: 'Midfield',
        D: 'Forward',
        answer(){
            return this.C
        },
        isTaken :false,
        info: 'Beckham, one of the most famous footballers of all time was known as an exceptional midfielder with top quality crossing and free kicks skills.',
        img: "imgs/david-beckham.jpg"
    },
    Question3 = {
        text: "Who is the protagonist in the movie `<i>The Wolf of Wall Street`</i> ",
        A: 'Leonardo Di Caprio',
        B: 'Brad Pitt',
        C: 'Robbie Williams',
        D: 'Dave Chappele',
        answer(){
            return this.A
        },
        isTaken :false,
        info: 'Leonardo Di Caprio skyrocketed his popularity when he starred in the 2013 film, which also gave him an Oscar nomination.',
        img: "/imgs/Wolf.jpg"
    },
    Question4 = {
        text: "What Year Greece won the Uefa Euro Cup?",
        A: '1996',
        B: '2004',
        C: '2012',
        D: '2016',
        answer(){
            return this.B
        },
        isTaken :false,
        info: 'Against all odds, the Greek National Team eliminated France, Czech Republic and Portugal among others to claim the top spot in Uefa`s competition',
        img: "/imgs/Greece-Euro-2004-Champions.jpg"
    },
    Question5 = {
        text: 'Who is the creator of Facebook?',
        A: 'Bill Gates',
        B: 'Steve Jobs',
        C: 'Mark Zuckerberg',
        D: 'Barack Obama',
        answer() {
            return this.C
        },
        isTaken: false,
        info: 'The most acclaimed of social networks, Facebook has been into most people`s lives for decades now.',
        img: "imgs/facebook.jpg"
    },
    Question6 = {
        text: 'Which is the capital city of China?',
        A: 'Ottowa',
        B: 'Beijing',
        C: 'Islamabad',
        D: 'Bern',
        answer(){
            return this.B
        },
        isTaken: false,
        info: 'Beijing was also the host city of the 2008 Summer Olympics',
        img: "imgs/beijing.webp"
    },
    Question7 = {
        text: 'How did Spider-Man get his powers?',
        A: 'Born with them',
        B: 'Bitten by a radioactive spider',
        C: 'Inheritance',
        D: 'He was a subject of militart experiments',
        answer(){
            return this.B
        },
        isTaken: false,
        info: 'The famous superhero got his powers from another spider.',
        img: "imgs/spiderman.jpg"
    },
    Question8 = {
        text: "Who is the album's shown on the left artist?",
        A: 'Eminem',
        B: 'A Tribe Called Quest',
        C: 'Run DMC',
        D: 'Logic',
        answer(){
            return this.A
        },
        isTaken: false,
        info: "Despite the controversy of the album, it received acclaim from critics, who praised Eminem's lyrical ability and considered the album to have emotional depth.",
        img: 'imgs/eminem.png'
    },
    Question9 = {
        text: 'In what city would you find the Colosseum?',
        A: 'Paris',
        B: 'Madrid',
        C: 'Rome',
        D: 'Athens',
        answer(){
            return this.C
        },
        isTaken: false,
        info: "The Colosseum also known as the Flavian Amphitheatre is an oval amphitheatre in the centre of the city of Rome, Italy.",
        img: 'imgs/collose.jpg'
    },
    Question10 = {
        text: 'Where was the famous attack by Japan that led to America joining World War II?',
        A: 'Stalingrad',
        B: 'Litani River',
        C: 'Saarland',
        D: 'Pearl Harbor',
        answer(){
            return this.D
        },
        isTaken: false,
        info: 'The Attack on Pearl Harbor was a surprise military strike by the Imperial Japanese Navy Air Service upon the United States.',
        img: 'imgs/pearlharbor.jpg'
    }
]
const MediumQuestions = [
    Question1 = {
        text: 'In which Led Zeppelin album the song <i>Stairway to Heaven</i> appears?',
        A: 'Led Zeppelin I',
        B: 'Houses of the Holy',
        C: 'Led Zeppelin IV',
        D: 'Led Zeppelin III',
        answer(){
            return this.C
        },
        isTaken: false,
        info: 'Led Zeppelin IV received overwhelming praise from critics and regarded it as "the definitive Led Zeppelin and hence heavy metal album"',
        img: "imgs/zeppelin.jpg"
    },
    Question2 = {
        text: 'Who is the director of the documentary `Fahrenheit 9/11`?',
        A: 'Michael Moore',
        B: 'Errol Morris',
        C: 'Adam Curtis',
        D: 'Asif Kapadia',
        answer(){
            return this.A
        },
        isTaken: false,
        info: 'Fahrenheit 9/11 is a 2004 American political documentary film directed, written by, and starring Michael Moore.',
        img: "imgs/fahrenheit.jpg"
    },
    Question3 = {
        text: 'Which is the most marketable whiskey coming from Ireland?',
        A: 'Jameson',
        B: 'Bushmills',
        C: 'Tullamore Dew',
        D: 'The Dead Rabbit',
        answer(){
            return this.A
        },
        isTaken: false,
        info: 'Jameson is a blended Irish whiskey produced by the Irish Distillers subsidiary of Pernod Ricard.',
        img: "imgs/whiskey.jpg"
    },
    Question4 = {
        text: "What's the name of the major methamphetamine distributor in the Breaking Bad series, who owned <i>Los Pollos Hermanos</i>?",
        A: 'Walter White',
        B: 'Gus Fring',
        C: 'Jesse Pinkman',
        D: 'Hector Salamanca',
        answer(){
            return this.B
        },
        isTaken:false,
        info: 'The character Gustavo Fring is named after the former German international footballer Torsten Frings.',
        img: "imgs/gusfring.jpg"
    },
    Question5 = {
        text: "Who was Donald Trump's Vice President on his 2016-2020 presidential run?",
        A: "Al Gore",
        B: "Joe Biden",
        C: "Mike Pence",
        D: "Walter Mondale",
        answer(){
            return this.C
        },
        isTaken: false,
        info: "Pence withdrew his gubernatorial reelection campaign in July 2016 to become the running mate of Republican presidential nominee Donald Trump.",
        img: "imgs/trump.jpg"
    },
    Question6 = {
        text: 'Who is the person in the photo, famous as a cast member on <i>Saturday Night Live</i> variety show?',
        A: 'Bill Muray',
        B: 'Chevy Chase',
        C: 'Mike Myers',
        D: 'Bill Hader',
        answer(){
            return this.D
        },
        isTaken: false,
        info: 'Hader has stated that his comedy influences include Monty Python, Alan Alda, Woody Allen, Mel Brooks, and Eddie Murphy.',
        img: 'imgs/billhader.jpg'
    },
    Question7 = {
        text: 'Which team Jose Mourinho managed to the top at the UEFA Champions League 2004?',
        A: 'Manchester United',
        B: 'Porto',
        C: 'Inter Milan',
        D: 'Chelsea',
        answer(){
            return this.B
        },
        isTaken: false,
        info: "This was Porto's second European trophy in two years, following their UEFA Cup success from the previous season.",
        img: 'imgs/mourinho.jpg'
    },
    Question8 = {
       text: "What was Nirvana's last studio album named?",
       A: 'Nevermind',
       B: 'In Utero',
       C: 'Bleach',
       D: 'Incesticide',
       answer(){
           return this.B
       },
       isTaken: false,
       info: 'Upon release, In Utero reached number one on both the US Billboard 200 and UK Albums Chart. ',
       img: 'imgs/nirvana.jpg'
    },
    Question9 = {
        text: 'Who is the actor playing the main protagonist in the movie "Donnie Darko" ?',
        A: 'Patrick Swayze',
        B: 'Jake Gyllenhaal',
        C: 'Matthew McConaughey',
        D: 'Charlie Hunnam',
        answer(){
            return this.B
        },
        isTaken: false,
        info: "The film follows the adventures of the troubled titular character as he seeks to find the meaning behind his doomsday-related visions.",
        img: 'imgs/donnie.jpg'
    },
    Question10 = {
        text: 'The American TV show Friends is set in which city?',
        A: 'Los Angeles',
        B: 'San Francisco',
        C: 'New York City',
        D: 'Denver',
        answer(){
            return this.C
        },
        isTaken: false,
        info: "The show revolves around six friends in their 20s and 30s who live in Manhattan, New York City. The series was produced by Bright/Kauffman/Crane Productions.",
        img: 'imgs/friends.jpg'
    }
]
const HardQuestions = [
    Question1 = {
        text: "Who is the artist behind the avant-garde masterpiece 'Trout Mask Replica' ?",
        A: 'Frank Zappa',
        B: 'The Talking Heads',
        C: 'The Velvet Underground',
        D: 'Captain Beefheart',
        answer(){
            return this.D
        },
        isTaken: false,
        info: "Its highly unconventional musical style has given the album a reputation as one of the most challenging recordings in the 20th century musical canon.",
        img: 'imgs/trout.png'
    },
    Question2 = {
        text: "Who is the creator of the operating system TempleOS?",
        A: 'Linus Torvalds',
        B: 'Terry A. Davis',
        C: 'Larry Page',
        D: 'Dennis Ritchie',
        answer(){
            return this.B
        },
        isTaken: false,
        info: "Although Davis remained lucid when discussing computer-related subjects, his communication skills were largely affected by his schizophrenia",
        img: 'imgs/templeos.png'
    },
    Question3 = {
        text: "As of 1 May 2020, what's the highest rated film on iMDB?",
        A: 'The Godfather',
        B: 'The Dark Knight',
        C: 'Pulp Fiction',
        D: 'The Shawshank Redemption',
        answer(){
            return this.D
        },
        isTaken: false,
        info: "While the movie received positive reviews, particularly for its story and the performances of Robbins and Freeman, it was a box-office disappointment.",
        img: 'imgs/movies.jpg'
    },
    Question4 = {
        text: "Before 2014, how many times had the Mona Lisa been stolen from the Louvre?",
        A: '1',
        B: '2',
        C: '3',
        D: 'None',
        answer(){
            return this.A
        },
        isTaken: false,
        info: 'The Mona Lisa holds the Guinness World Record for the highest known insurance valuation in history at US$100 million in 1962.',
        img: 'imgs/monalisa.jpg'
    },
    Question5 = {
        text: "What is the famous cocktail's name made of Tequila,Lime and Grapefruit Soda?",
        A: 'Singapore Sling',
        B: 'Paloma',
        C: 'Tom Collins',
        D: 'Rusty Nail',
        answer(){
            return this.B
        },
        isTaken: false,
        info: 'The Paloma is more flavorful than its closest relative, the Greyhound, which consists of grapefruit juice and either gin or vodka mixed and served over ice.',
        img: 'imgs/paloma.jpg'
    },
    Question6 = {
        text: "How many black and white squares are there on a chess board in total?",
        A: "32",
        B: "64",
        C: "96",
        D :"24",
        answer(){
            return this.B
        },
        isTaken: false,
        info: "In western chess the board has a square shape, with its side being divided into eight parts, resulting in a total of sixty-four squares.",
        img: "imgs/chess.jpg"
    },
    Question7 = {
        text: "Brazil is the world’s largest exporter of which product?",
        A: "Ethanol",
        B: "Iron Ore",
        C: "Coffee",
        D: "Raw Sugar",
        answer(){
            return this.C
        },
        isTaken: false,
        info: "Brazil’s weaker local currency make Brazilian exports paid for in stronger US dollars relatively less expensive for international buyers.",
        img: "imgs/brazil.jpg"
    },
    Question8 = {
        text: "Which band Kanye West recognised as a major influence on his Yeezus album?",
        A: "White Stripes",
        B: "Flatbush Zombies",
        C: "BBNG",
        D: "Death Grips",
        answer(){
            return this.D
        },
        isTaken: false,
        info: "The album has been characterized as West's most experimental and sonically abrasive work.",
        img: "imgs/yeezus.jpg"
    },
    Question9 = {
        text: "So far, which continent has hosted the Olympics the most times?",
        A: "Europe",
        B: "Asia",
        C: "South America",
        D: "North America",
        answer(){
            return this.A
        },
        isTaken: false,
        info: "The Olympic Games are normally held every four years, alternating between the Summer and Winter Olympics every two years in the four-year period.",
        img: "imgs/olympic.jpg"
    },
    Question10 = {
        text: "To celebrate its 30th birthday, Google placed a playable version of what arcade game on its homepage?",
        A: "Pong",
        B: "Super Mario Bros",
        C: "Pac-Man",
        D: "Space Invaders",
        answer(){
            return this.C
        },
        isTaken: false,
        info: "Google doodler Ryan Germick made sure to include PAC-MAN’s original game logic, graphics and sounds.",
        img: "imgs/google.jpg"
    }
]


//Game Start functions and checks
function game(){
    clearInterval(timer);
    timer1()
    for (let i=0;i<Answers.length;i++){
        Answers[i].addEventListener('click', checkAnswer);
        Answers[i].style.color = '#FDFFFC';
    }
    Home.style.display = 'none';
    QuestionsDiv.style.display = 'flex';
    AnswersDiv.style.display = 'flex';
    index = Math.floor(Math.random() * EasyQuestions.length);
    if(EasyQuestions[index].isTaken === false){
        EasyQuestions[index].isTaken = true;
    question.innerHTML = EasyQuestions[index].text;
    Answers[0].innerHTML = EasyQuestions[index].A;
    Answers[1].innerHTML = EasyQuestions[index].B;
    Answers[2].innerHTML = EasyQuestions[index].C;
    Answers[3].innerHTML = EasyQuestions[index].D;
    ImgDiv.src = ' '+ EasyQuestions[index].img + '';
    
    if (steps == 4){
        game1();
    }
    steps++;
    } else {
        game()
    }
}

function game1(){
    clearInterval(timer);
    timer2()
    for (let i=0;i<Answers.length;i++){
        Answers[i].addEventListener('click', checkAnswer);
        Answers[i].style.color = '#FDFFFC';
    }
    Home.style.display = 'none';
    QuestionsDiv.style.display = 'flex';
    AnswersDiv.style.display = 'flex';
    index = Math.floor(Math.random() * MediumQuestions.length);
    if(MediumQuestions[index].isTaken === false){
        MediumQuestions[index].isTaken = true;
        question.innerHTML = MediumQuestions[index].text;
        Answers[0].innerHTML = MediumQuestions[index].A;
        Answers[1].innerHTML = MediumQuestions[index].B;
        Answers[2].innerHTML = MediumQuestions[index].C;
        Answers[3].innerHTML = MediumQuestions[index].D;
        ImgDiv.src = ' '+ MediumQuestions[index].img + '';
    if (steps == 9){
        game2();
    }
    steps++;}else {
        game1();
    }
}

function game2(){
    clearInterval(timer);
    timer3()
    for (let i=0;i<Answers.length;i++){
        Answers[i].addEventListener('click', checkAnswer);
        Answers[i].style.color = '#FDFFFC';
    }
    Home.style.display = 'none';
    QuestionsDiv.style.display = 'flex';
    AnswersDiv.style.display = 'flex';
    index = Math.floor(Math.random() * HardQuestions.length);
    if(HardQuestions[index].isTaken === false){
        HardQuestions[index].isTaken = true;
    question.innerHTML = HardQuestions[index].text;
    Answers[0].innerHTML = HardQuestions[index].A;
    Answers[1].innerHTML = HardQuestions[index].B;
    Answers[2].innerHTML = HardQuestions[index].C;
    Answers[3].innerHTML = HardQuestions[index].D;
    ImgDiv.src = ' '+ HardQuestions[index].img + '';
    
   
    if (steps === 14){
        endgame();
    }
    steps++;}
    else {
        game2();
    }
}

//game end

function endgame(){
    clearInterval(timer);
    QuestionsDiv.style.display = 'none';
    AnswersDiv.style.display = 'none';
    endDiv.style.display = 'block';
    endScore.innerHTML = score;
}


//answer checks and info

function checkAnswer(e){
    let answer = e.currentTarget;
    for (let i=0;i<Answers.length;i++){
        Answers[i].removeEventListener('click', checkAnswer)
        Answers[i].style.color = '#E71D36';
    }
    clearInterval(timer);
    if (steps <5){
        let correctAns = EasyQuestions[index].answer();
        for (let i=0; i<Answers.length; i++){
            if(Answers[i].innerHTML == correctAns){
                Answers[i].style.color = '#698F3F';
            }
        }
    if (answer.innerHTML === correctAns){
        score++;
        playerScore.innerHTML = score;
        }
       info();}
    else if (steps < 10){
        let correctAns = MediumQuestions[index].answer();
        for (let i=0; i<Answers.length; i++){
            if(Answers[i].innerHTML == correctAns){
                Answers[i].style.color = '#698F3F';
            }}
        if (answer.innerHTML === correctAns){
            score+= 2;
            playerScore.innerHTML = score;
        }
        info1();} 
    else {
        let correctAns = HardQuestions[index].answer();
        for (let i=0; i<Answers.length; i++){
            if(Answers[i].innerHTML == correctAns){
                Answers[i].style.color = '#698F3F';
            }}
        if (answer.innerHTML === correctAns){
            score+= 3;
            playerScore.innerHTML = score;
        }
        info2();
        }
}

function info(){
    for (let i=0;i<Answers.length;i++){
        Answers[i].removeEventListener('click', checkAnswer);
        Answers[i].style.color = '#E71D36';
        let correctAns = EasyQuestions[index].answer();
        if(Answers[i].innerHTML == correctAns){
            Answers[i].style.color = '#698F3F';
        }
    }
    clearInterval(timer);
    question.innerHTML = EasyQuestions[index].info;
    setTimeout(game, 4000);
}
function info1(){
    for (let i=0;i<Answers.length;i++){
        Answers[i].removeEventListener('click', checkAnswer);
        Answers[i].style.color = '#E71D36';
        let correctAns = MediumQuestions[index].answer();
        if(Answers[i].innerHTML == correctAns){
            Answers[i].style.color = '#698F3F';
        }
    
    }
    clearInterval(timer);
    question.innerHTML = MediumQuestions[index].info;
    setTimeout(game1, 4000);
}
function info2(){
    for (let i=0;i<Answers.length;i++){
        Answers[i].removeEventListener('click', checkAnswer);
        Answers[i].style.color = '#E71D36';
        let correctAns = HardQuestions[index].answer();
        if(Answers[i].innerHTML == correctAns){
            Answers[i].style.color = '#698F3F';
        }
    
    }
    clearInterval(timer);
    question.innerHTML = HardQuestions[index].info;
    setTimeout(game2, 4000);
}

//timers

function timer1(){
    let counter = 10;
    timer = setInterval(()=> {
        document.getElementById('timer').innerHTML = counter;
        --counter;
        if(counter<0){
            info();
        }
    },1000);
}
function timer2(){
    let counter = 10;
    timer = setInterval(()=> {
        document.getElementById('timer').innerHTML = counter;
        --counter;
        if(counter<0){
            info1();
        }
    },1000);
}
function timer3(){
    let counter = 10;
    timer = setInterval(()=> {
        document.getElementById('timer').innerHTML = counter;
        --counter;
        if(counter<0){
            info2();
        }
    },1000);
}
