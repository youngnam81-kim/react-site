import './App.css'
import Login from "./compo/Login.jsx";
import Home from "./compo/Home.jsx";
import Layout from "./compo/Layout.jsx";
import Compo0811 from "./compo/0811/Compo0811.jsx";
import Compo0812 from "./compo/0812/Compo0812.jsx";
import Compo0808 from "./compo/0808/Compo0808.jsx";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>과제방</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/react-site/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site/login" element={<Login />} />
          <Route path="/react-site/0811" element={<Compo0811 />} />
          <Route path="/react-site/0808" element={<Compo0808 />} />
          <Route path="/react-site/0812" element={<Compo0812 />} />
        </Routes>
      </BrowserRouter>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
