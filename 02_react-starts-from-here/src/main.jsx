import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
    {/* you can also write only App() */}
    {/* component app is given here to render */}
  </React.StrictMode>,
)
