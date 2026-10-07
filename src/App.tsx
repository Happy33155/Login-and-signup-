import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Navbar from "./components/resizable-navbar-demo";
import Dummy from "./components/ui/DummyContent";


const App = () => {
  return <div>
    <Navbar />
   
    <Routes>

      <Route path="/auth" element={<Auth/>}/>
      <Route path="/dummy" element={<Dummy/>}/>
    </Routes>
  </div>;
};

export default App;
