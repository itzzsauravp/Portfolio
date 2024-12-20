import { Routes, Route } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import LandingPage from "./pages/LandingPage";
import TechStack from "./pages/TechStack";
import CursorEffect from "./components/CursorEffect";
import ProjectDetails from "./pages/ProjectDetails";
const App = () => {
  return (
    <section className="w-[80%] m-auto text-white mt-10">
      <CursorEffect />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/project/:name" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </section>
  );
};

export default App;
