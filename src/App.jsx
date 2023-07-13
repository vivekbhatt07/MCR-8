import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landing, Detail } from "./Pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        newestOnTop={false}
        closeOnClick
        theme="colored"
        rtl={false}
        pauseOnFocusLoss
        draggable
        autoClose={5000}
      />
      <div className="bg-stone-700">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
