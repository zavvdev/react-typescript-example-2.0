import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { NotFound } from "pages/NotFound/NotFound";
import { generalRoutes } from "router/config/routes/generalRoutes";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        {/* General Routes */}

        <Route path={generalRoutes.home} element={<Home />} />

        {/* --------- */}

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>

  );
}
