import { userCounter } from "./hooks/useCounter"

const MyCounterApp = () => {

    const { counter, handleAdd, handleSubtract, handleReset } = userCounter()
    

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        marginTop: '50px'}}>

                <h1>Counter: {counter}</h1>

            <div style={{display: 'flex', gap: '20px'}}>
                <button onClick={handleSubtract}>-1</button>
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleReset}>reset</button>
            </div>
      
    </div>
  ) 
}

export default MyCounterApp
