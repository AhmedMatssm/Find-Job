
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindJob from "./component/findJob/FindJob";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import PostJob from "./component/postJob/PostJob";
import Compte from "./component/compte/Compte";
import Home from "./component/home/Home";
import Footer from "./component/footer/footer";
import Dash from "./component/pageDash/dashbord/dash";
import Jobs from "./component/pageDash/jobs/jobs";
import Jadore from "./component/pageDash/jadore/jadore";
import Trash from "./component/pageDash/trash/trash";
import Profile from "./component/pageDash/profile/profile";
import Settings from "./component/pageDash/settings/settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route index element={<Home/>} />
            <Route path="/findJob" element={<FindJob/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/postJob" element={<PostJob/>} />
            <Route path="/compte" element={<Compte/>} />
        </Routes>
        <Routes>
            <Route path="/dash" element={<Dash/>} />
            {/* <Route index element={<Dash/>} /> */}
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/jadore" element={<Jadore/>} />
            <Route path="/trash" element={<Trash/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/settings" element={<Settings/>} />
        </Routes>

    </BrowserRouter>

    </>
  );
}

export default App;
