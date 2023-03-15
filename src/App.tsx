import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';

const Landing = lazy(() => import("./pages"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="app" />} />
        <Route path="/app/*" element={<Landing />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
