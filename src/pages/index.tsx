import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Navbar from '../components/navbar';
import "./style.scss";

const Counter = lazy(() => import("./counter"));
const Home = lazy(() => import("./home"));
const Search = lazy(() => import("./search"));

const Landing: React.FC = () => {

  return (
    <div>
      <Navbar></Navbar>
      <div className="pages-body">
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/Search" element={<Search />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
  }
  
  export default Landing;
  