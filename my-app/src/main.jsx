import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Routes} from 'react-router-dom';
import reducer, {initialState} from "./reducer"
import { StateProvider } from './StateProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Routes>
        <App />
      </Routes>
    </StateProvider>
  </StrictMode>,
)
