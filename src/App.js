
import Nav from "./pages/Navbar";
import Routess from "./Routes/Route";
import { ColorModeScript } from '@chakra-ui/react';
import theme from "./theme";
import {
  BrowserRouter as Router,
  Route,
  Outlet,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
 <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Routess />
    </>
  );
}

export default App;
