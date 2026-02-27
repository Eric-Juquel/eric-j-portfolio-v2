import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./modules/core/layout/Layout";
import { APP_ROUTES } from "./modules/core/routes";
import HomeView from "./modules/home/HomeView";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from "react-toastify";
import AchievementsView from "./modules/achievements/AchievementsView";
import ContactView from "./modules/contact/ContactView";
import NotFound from "./modules/core/error/NotFound";
import SkillsView from "./modules/skills/SkillsView";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={APP_ROUTES.home.href} />} />
        <Route path={`${APP_ROUTES.home.href}/*`} element={<HomeView />} />
        <Route path={`${APP_ROUTES.skills.href}/*`} element={<SkillsView />} />
        <Route
          path={`${APP_ROUTES.achievements.href}/*`}
          element={<AchievementsView />}
        />
        <Route
          path={`${APP_ROUTES.contact.href}/*`}
          element={<ContactView />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  );
}
