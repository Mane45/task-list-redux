import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
// console.log(store)
// console.log(store.getState())
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
