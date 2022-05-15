import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "../home/Home";
const Home = React.lazy(() => import("../home/Home"));
export const Main = () => {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
