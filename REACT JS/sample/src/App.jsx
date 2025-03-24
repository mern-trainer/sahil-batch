// import { Fragment } from "react"

import { Fragment } from "react"

export const App = () => {

    const name = "Alexander"

    const handleGenerateRandomNumber = (time) => {
        const randomNumber = Math.floor(Math.random() * 100)
        console.log(randomNumber, time);
    }

    return <Fragment> 
        <h1>React</h1>
        <p>React is a JavaScript library for building user interfaces.</p>
        <div>Hey</div>
        <div>Name of user: {name}</div>
        <button onClick={() => {
            handleGenerateRandomNumber(new Date())
        }}>Generate a random number</button>
    </Fragment>
}

// export default App // default export
