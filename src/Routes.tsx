import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
