import React from 'react'
import { render } from 'react-dom'
import Counter from './components/Counter'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const root = () => render(
    <Counter 
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' }) }
        onDecrement={() => store.dispatch({ type: 'DECREMENT' }) }
    />, 
    document.getElementById('root')
)

root() 
store.subscribe(root)
