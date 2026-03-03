import { useState } from "react"

export const userCounter = () => {

    const [counter, setCounter] = useState(5)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleSubtract = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(0)
    }

  return {
    // props
    counter,

    // methods
    handleAdd,
    handleSubtract,
    handleReset

  }
}

