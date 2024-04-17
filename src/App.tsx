import { Routes, Route } from "react-router-dom";
import {
  Model3,
  Models,
  Modelx,
  Modely,
  SolarPanels,
  SolarRoof,
  ErrorPage,
} from "@pages";
import { Header } from "@components";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Models />} />
          <Route path="/model_3" element={<Model3 />} />
          <Route path="/model_x" element={<Modelx />} />
          <Route path="/model_y" element={<Modely />} />
          <Route path="/solar_roof" element={<SolarRoof />} />
          <Route path="/solar_panels" element={<SolarPanels />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
