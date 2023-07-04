import { useState } from 'react'
import './App.css'


const TURNS ={
    X: '×',
    O: 'o'
}

console.log(TURNS)

const Square = ({ children, isSelected, updateBoard, index }) => {
    // mostramos visualmente en css el turno del jugador
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = (index) => {
        updateBoard()
    }

    return (
        <div 
            onClick={handleClick}
            className={className}
        >
            {children}
        </div>
    )
}




function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X)

    // funcion que se encarga de actualizar el estado, los turnos y quien es ganador o no
    const updateBoard = (index) => {
        // si ya se hizo click en un cuadro 
        // evitamos que se sobreescriba y no hace nada
        if(board[index]) return
        
        // actualizamos el tablero
        const newBoard = [...board]
        newBoard[index] = turn // X u O
        setBoard(newBoard)

        //cada vez que hacemos click en un cuadro cambiamos el turno
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
    }

    return (
        <main className="board">
            <h1>Ta Te Ti</h1>
            <section className="game">
                { //renderizamos los square dentro del tablero
                    board.map((index) => {
                        return (
                            <Square 
                                index={index}
                                key={index}
                                updateBoard={updateBoard}
                            >
                                <span className="cell__content">
                                    {board[index]}
                                </span>
                            </Square>
                        )
                    })
                }
            </section>
            <section className="turn">
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>
        </main>
    )
}

export default App
