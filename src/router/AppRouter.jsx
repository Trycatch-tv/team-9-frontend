import { Route, Routes } from "react-router-dom";

import { NotFound404 } from "../pages/NotFound404";
import { LoginPage } from "../pages/LoginPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/*" element={<NotFound404 />} />
    </Routes>
  );
};
