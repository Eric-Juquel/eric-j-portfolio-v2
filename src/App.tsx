import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./modules/core/layout/Layout";
import { APP_ROUTES } from "./modules/core/routes";
import HomeView from "./modules/home/HomeView";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NotFound from "./modules/core/error/NotFound";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={APP_ROUTES.home.href} />} />
        <Route path={`${APP_ROUTES.home.href}/*`} element={<HomeView />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
