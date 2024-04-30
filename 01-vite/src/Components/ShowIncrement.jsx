export const ShowIncrement = ({ incrementFather }) => {
    return (
        <button
            onClick={() => incrementFather(5)}>
            Increment
        </button>
    )
}