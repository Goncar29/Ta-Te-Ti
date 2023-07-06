export const Square = ({ children, isSelected, updateBoard, index }) => {
    // mostramos visualmente en css el turno del jugador
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}