import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { NotFound404 } from "../pages/NotFound404";
import { LoginPage } from "../pages/LoginPage";
import { ReservationPage } from "../pages/ReservationPage";
import { AdminPage } from "../pages/AdminPage";
import { AboudPage } from "../pages/AboudPage";
import { LogoutApp } from "../components/LogoutApp";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRouter />}>
          <Route index element={<HomePage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/aboud" element={<AboudPage />} />
          {/* <Routes path="/*" element={<NotFound404 />} /> */}
        </Route>
        <Route path="/private" element={<PrivateRouter />}>
          <Route index element={<AdminPage />} />
          <Route path="/private/logout" element={<LogoutApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
