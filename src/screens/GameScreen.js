import React, { useState } from 'react'
import '../styles/game.css'

const buttonStyle = {
    padding: '10px 40px',
    borderRadius: '10px',
    fontSize: '25px',
    borderStyle: 'none',
    color: 'white',
    backgroundColor: '#4ECCA3'
}

function GameScreen() {
    const [randomNumber1, setRandomNumber1] = useState(6)
    const [randomNumber2, setRandomNumber2] = useState(6)
    const [title, setTitle] = useState("Dicee game")
    const onPlay = () => {
        let number1 = Math.floor(Math.random() * 6) + 1;//1-6 (nuo vieno iki 6)
        setRandomNumber1(number1)
        var number2 = Math.floor(Math.random() * 6) + 1;//nuo 1 iki 6
        setRandomNumber2(number2)
        //If player 1 wins
        if (number1 > number2) {
            setTitle("🚩 Play 1 Wins!")
        }
        else if (number2 > number1) {
            setTitle("Player 2 Wins! 🚩")
        }
        else {
            setTitle("Draw!")
        }
    }
    return (
        <div style={{ backgroundColor: '#393E46', height: '850px', width: '100%', position: 'relative', padding: '0px 0px !important'}}>
            <div class="trash">

                <h1 className='big'>{title}</h1>
                <button onClick={onPlay} style={{ ...buttonStyle }}>Play</button>
                <br></br>
                <div class="dice">
                    <p className='text'>Player 1</p>
                    <img class="img1" style={{ width: '100%' }} src={require(`../images/dice${randomNumber1}.png`).default} />
                </div>

                <div class="dice">
                    <p className='text'>Player 2</p>
                    <img class="img2" style={{ width: '100%' }} src={require(`../images/dice${randomNumber2}.png`).default} />
                </div>

            </div>
        </div>
    )
}

export default GameScreen
