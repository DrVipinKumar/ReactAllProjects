import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./reactrouter/Home";
import Service from "./reactrouter/Service";
//import ContactUs from "./reactrouter/ContactUs";
import AboutUs from "./reactrouter/AboutUs";
import Header from "./reactrouter/Header";
import Footer from "./reactrouter/Footer";
import ErrorPage from "./reactrouter/ErrorPage";
import OnlineVideos from "./reactrouter/OnlineVideos";
import YoutubeVideos from "./reactrouter/YoutubeVideos";
import Language from "./reactrouter/Language";
import LangInfo from "./reactrouter/LangInfo";
const LazyContactUs = React.lazy(() => import("./reactrouter/ContactUs"));
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home title="React Home Page" />} />
        <Route path="/language" element={<Language />}>
          <Route path=":lang" element={<LangInfo />}></Route>
        </Route>
        <Route path="/service" element={<Service />}>
          <Route index element={<OnlineVideos />} />
          <Route path="onlinevideos" element={<OnlineVideos />} />
          <Route path="youtubevideos" element={<YoutubeVideos />} />
        </Route>
        <Route
          path="/contactus"
          element={
            <React.Suspense fallback={"Loading Page...."}>
              <LazyContactUs />
            </React.Suspense>
          }
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
