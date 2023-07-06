import { Square } from "./Square"

export function Tablero ({ board, updateBoard }) {

    //renderizamos los square dentro del tablero
    return (
        board.map((square, index) => {
            return (
                <Square 
                    index={index}
                    key={index}
                    updateBoard={updateBoard}
                >
                    {square}
                </Square>
            )
        })
    )
}