import "./App.css";
import Login from "./compo/Login.jsx";
import Home from "./compo/Home.jsx";
import Layout from "./compo/Layout.jsx";
import Compo0808 from "./compo/0808/Compo0808.jsx";
import Compo0811 from "./compo/0811/Compo0811.jsx";
import Compo0812 from "./compo/0812/Compo0812.jsx";
import Compo0813 from "./compo/0813/Compo0813.jsx";
import Compo0814 from "./compo/0814/Compo0814.jsx";
import Compo0818 from "./compo/0818/Compo0818.jsx";
import MiniBlog from "./compo/miniBlog/MiniBlog.jsx";
import MainPage from './compo/miniBlog/components/pages/MainPage';
import PostWritePage from './compo/miniBlog/components/pages/PostWritePage';
import PostViewPage from './compo/miniBlog/components/pages/PostViewPage';
import ReactPractice from "./compo/react-practice/ReactPractice.jsx";
import AxiosTest from "./compo/axios/Test.jsx";
import AxiosItemList from "./compo/axios/ItemList.jsx";


import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>과제방</h1>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/react-site/axiosTest" element={<AxiosTest />} />
          <Route path="/react-site/axiosItemList" element={<AxiosItemList />} />
          <Route path="/react-site/MiniBlog" element={<MiniBlog />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/post-write' element={<PostWritePage />} />
          <Route path='/post/:postId' element={<PostViewPage />} />
          <Route path="/react-site/" element={<Layout />} />
          <Route path="/react-site/login" element={<Login />} />
          <Route path="/react-site/0811" element={<Compo0811 />} />
          <Route path="/react-site/0808" element={<Compo0808 />} />
          <Route path="/react-site/0812" element={<Compo0812 />} />
          <Route path="/react-site/0813" element={<Compo0813 />} />
          <Route path="/react-site/0814" element={<Compo0814 />} />
          <Route path="/react-site/0818" element={<Compo0818 />} />
          <Route path="/react-site/react-practice" element={<ReactPractice />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
