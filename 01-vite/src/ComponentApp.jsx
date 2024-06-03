const categories = ['first category', 'second category'];
export const ComponentApp = () => {
    return (
        <>
            <h1>GifExpert</h1>
            <ol>
                {
                    categories.map((category, key) => {
                        return <li key={key}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}