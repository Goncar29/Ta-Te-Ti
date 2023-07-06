import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constant.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Tablero } from './components/Tablero.jsx'
import './App.css'

function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X)
    // null es que no hay ganador, false es que hay un empate
    const [winner, setWinner] = useState(null)

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
    }


    // funcion que se encarga de actualizar el estado, los turnos y quien es ganador o no
    const updateBoard = (index) => {
        // si ya se hizo click en un cuadro 
        // evitamos que se sobreescriba y no hace nada
        if(board[index] || winner) return
        
        // actualizamos el tablero
        const newBoard = [...board]
        newBoard[index] = turn // X u O
        setBoard(newBoard)

        //cada vez que hacemos click en un cuadro cambiamos el turno
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
        // revisar si hay ganador
        const newWinner = checkWinnerFrom(newBoard)
        if (newWinner) {
            confetti()
            setWinner(newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false) // empate
        }
    }

    return (
        <main className="board">
            <h1>Tic-Tac-Toe</h1>
            <button onClick={resetGame}>Reset del juego</button>
            
            <section className="game">
                <Tablero board={board} updateBoard={updateBoard} />
            </section>
            
            <section className="turn">
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>

            <WinnerModal resetGame={resetGame} winner={winner} />
        
        </main>
    )
}

export default App
