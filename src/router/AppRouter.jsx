import { Route, Routes } from "react-router-dom";

import { NotFound404 } from "../pages/NotFound404";
import { LoginPage } from "../pages/LoginPage";
import { ReservationPage } from "../pages/ReservationPage";
import { AdminPage } from "../pages/AdminPage";
import { AboudPage } from "../pages/AboudPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ReservationPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/aboud" element={<AboudPage />} />
      {/* <Route path="/*" element={<NotFound404 />} /> */}
    </Routes>
  );
};
