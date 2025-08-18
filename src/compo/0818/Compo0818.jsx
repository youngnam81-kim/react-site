import { createContext } from "react"
import ExContProvider01 from "./ExContProvider01";
import ExContProvider01_sub from "./ExContProvider01_sub";
import ExContProvider02 from "./ExContProvider02";
import ExContProvider02_sub from "./ExContProvider02_sub";
import ExJs02 from "./ExJs02";
import ExZustand03 from "./ExZustand03";
import ExReduxTool04 from "./ExReduxTool04";
import { store_redux } from "./js/store_redux";
import { Provider } from "react-redux";

export default function Compo0818() {
    const globalContext = createContext();

    return (
        <>
            <h2>0818</h2><hr></hr>
            <Provider store={store_redux}>
                <ExReduxTool04>
                </ExReduxTool04>
            </Provider><hr></hr>
            <ExZustand03></ExZustand03><hr></hr>
            <ExJs02></ExJs02><hr></hr>
            <ExContProvider01>
                <ExContProvider01_sub></ExContProvider01_sub>
            </ExContProvider01><hr></hr>
            <ExContProvider02>
                <ExContProvider02_sub></ExContProvider02_sub>
            </ExContProvider02><hr></hr>

        </>
    )
}


