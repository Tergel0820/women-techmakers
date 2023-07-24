import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout";
import {
  About,
  Conduct,
  EventDetail,
  Events,
  FAQ,
  Home,
  IWD2022,
  IWD2023,
  NotFound,
  Certificate,
} from "./pages";
import "./index.css";
import ThemeProvider from "./theme";

const Router = () => {
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout offset={offset} />}>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Events />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/team" element={<About />} />
            {/* <Route path="/conduct" element={<Conduct />} /> */}
            <Route path="/questions" element={<FAQ />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/IWD/2022" element={<IWD2022 />} />
            <Route path="/IWD/2023" element={<IWD2023 />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
