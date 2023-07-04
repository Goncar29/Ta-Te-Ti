import { useState } from 'react'
import './App.css'


const TURNS ={
    X: 'X',
    O: 'O'
}

console.log(TURNS)

const Square = ({ children, updateBoard, index }) => {
    return (
        <div className="square">
            {children}
        </div>
    )
}

function App() {

    const [board, setBoard] = useState(Array(9).fill(null))
    console.log(board)
    console.log(setBoard)
    return (
        <main className="board">
            <h1>Ta Te Ti</h1>
            <section className="game">
                {
                    board.map((index) => {
                        return (
                            <Square 
                                index={index}
                                key={index}
                            >
                                <span className="cell__content">
                                    {index}
                                </span>
                            </Square>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default App
