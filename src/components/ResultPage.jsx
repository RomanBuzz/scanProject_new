import * as React from "react";

import "../styles/ResultPage.css";

import ResultPageCarousel from "./ResultPageCarousel";
import ResultPageDocuments from "./ResultPageDocuments";

function ResultPage(props) {
    let [entries, setEntries] = React.useState(0);
    let [isLoaded, setLoaded] = React.useState(false);

    return (
        <>
            <div className="result_page__group_1">
                <div className="column column--left">
                    <h1 className="group_name">
                        Ищем. Скоро будут результаты
                    </h1>
                    <div className="text_info">
                        Поиск может занять некоторое время, просим сохранять терпение.
                    </div>
                </div>
                <div className="column column--right">
                    <img src={require('../images/result_page_logo.svg')} alt="result page logo" />
                </div>
            </div >

            <ResultPageCarousel isLoaded={isLoaded} entries={entries} />

            <ResultPageDocuments
                setEntries={setEntries} isLoaded={isLoaded} setLoaded={setLoaded}
                request={props.request} setRequest={props.setRequest}
            />
        </>
    );
}

export default ResultPage;