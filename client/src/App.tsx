import { useState } from 'react'
import AppRouter from './AppRouter'
import { Provider } from 'react-redux'
import { store } from './redux/app/store'

function App() {

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
