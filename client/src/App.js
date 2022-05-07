import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from "./components/Header";
import { useRoutes } from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import "react-datepicker/dist/react-datepicker.css";
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

function App() {
  const routes = useRoutes();    

  return (
    <div className="App">
      <Router>
        <Header />
        { routes }
      </Router>
    </div>
  );
}

export default App;