import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import {Layout}  from "./components/Layout/Layout";

const Home = lazy(()=> import("./pages/Home/Home"));
const Tweets = lazy(()=> import("./pages/Tweets/Tweets"));


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element ={<Home/>}/>
          <Route path="/tweets" element={<Tweets />} />
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="*" element={<Home/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

