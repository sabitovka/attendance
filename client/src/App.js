import { Header } from "./components/Header";
import { JournalPage } from "./pages/JournalPage";
import { PeriodButtonsMonth } from "./components/PeriodButtonsMonth";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import "react-datepicker/dist/react-datepicker.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import { useState } from "react";
import { MissesStatement } from "./components/MissesStatement";
import { statementData } from "./fake-data";
import { StatementPage } from "./pages/StatementPage";
import { Absence20Page } from "./pages/Absence20Page";

config.autoAddCss = false

function App() {

    const [period, setPeriod] = useState(new Date());

    return (
        <div className="App">
            <Header />
            {false && <JournalPage />}
            {false && <><PeriodButtonsMonth onPeriodSelected={setPeriod}/>
             <div>{period.getFullYear()}, {period.getMonth()}</div></>}
            {false && <StatementPage statementData={statementData} />}
            <Absence20Page />
        </div>
    );
}

export default App;
