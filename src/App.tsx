import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./modules/core/layout/Layout";
import { APP_ROUTES } from "./modules/core/routes";
import HomeView from "./modules/home/HomeView";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={APP_ROUTES.home.href} />} />
        <Route path={`${APP_ROUTES.home.href}/*`} element={<HomeView />} />
      </Routes>
    </Layout>
  );
}
