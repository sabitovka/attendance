import { Header } from "./components/Header";
import { JournalPage } from "./pages/JournalPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

function App() {
    
    return (
        <div className="App">
            <Header />
            <JournalPage />
        </div>
    );
}

export default App;
