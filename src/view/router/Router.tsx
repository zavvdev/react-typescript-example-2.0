import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "view/pages/Home/Home";
import { NotFound } from "view/pages/NotFound/NotFound";
import { GENERAL_ROUTES } from "view/router/config/routes/generalRoutes";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        {/* General Routes */}

        <Route path={GENERAL_ROUTES.home} element={<Home />} />

        {/* --------- */}

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>

  );
}
