import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import About from "./About.tsx";
import Chairs from "./Chairs.tsx";
import Events from "./Events.tsx";
import Photos from "./Photos.tsx";
import Misc from "./Misc.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<About />} />
              <Route path="/chairs" element={<Chairs />} />
              <Route path="/events" element={<Events />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/misc" element={<Misc />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </StrictMode>,
);
