import * as React from "react";
import { search, getDocuments } from "../services/scanInterfax";
import { extractImageSource, removeTags, numStrTag, searchProcessing } from "../lib/dataProcessing";

function ResultPageDocuments(props) {
    let [documentNumber, setDocumentNumber] = React.useState(10);
    let [documentList, setDocumentList] = React.useState(false);
    let [documentContent, setdocumentContent] = React.useState(false);

    const buttonFunc = () => {
        if (props.isLoaded != false & documentList != false) {
            getDocuments(documentList, documentNumber, documentNumber + 9)
                .then(data => {
                    if (data) {
                        setdocumentContent([...documentContent, ...data]);
                        setDocumentNumber(documentNumber + 10);
                    } else {
                        alert("Показаны все статьи по запросу!");
                    }
                });
        }
    }

    React.useEffect(() => {
        if (props.request != false & props.isLoaded == false) {
            search(...props.request).then((data) => {
                searchProcessing(data, props.request, props.setRequest, props.setLoaded, props.setEntries, setDocumentList)
            })
        }
        if (documentList != false) { getDocuments(documentList).then(data => setdocumentContent(data)) }
    }, [props.isLoaded, documentList]);

    return (
        <>
            {documentList != false ? (
                <div className="result_page__group_3">
                    <div className="group_name">Список документов</div>
                    <div className="tabs-collection">
                        {documentContent != false ? (documentContent.map((result) => (
                            <div key={result.ok.url + result.ok.source.name + result.ok.title.text} className="tabs-collection__item">
                                <div className="content_column">
                                    <div className="article__source text_info">
                                        <div className="article_date">
                                            {new Date(result.ok.issueDate).toLocaleDateString()}
                                        </div>
                                        <a href={result.ok.url} target="_blank" className="source_link">
                                            {result.ok.source.name}
                                        </a>
                                    </div>
                                    <div className="article__header text_info_bold">
                                        {result.ok.title.text}
                                    </div>
                                    <div className="article__type text_info">
                                        {result.ok.attributes.isTechNews ? (<div>Технические новости</div>) : ("")}
                                        {result.ok.attributes.isAnnouncement ? (<div>Анонсы и календари</div>) : ("")}
                                        {result.ok.attributes.isDigest ? (<div>Сводки новостей</div>) : ("")}
                                        {result.ok.attributes.isTechNews ? ("") :
                                            (result.ok.attributes.isAnnouncement ? ("") :
                                                (result.ok.attributes.isDigest ? ("") :
                                                    (<div>Статья без категории</div>)))}
                                    </div>
                                    <div className="article__image">
                                        <img
                                            src={extractImageSource(result.ok.content.markup) ?
                                                (extractImageSource(result.ok.content.markup))
                                                :
                                                (require('../images/skill-factory_image.svg'))}
                                            alt="article image"
                                            onError={(element) => { element.target.src = require('../images/skill-factory_image.svg') }}
                                        />
                                    </div>
                                    <div className="article__brief text_info">
                                        {removeTags(result.ok.content.markup)}
                                    </div>
                                    <div className="article__button">
                                        <button className="text_info"
                                            onClick={() => { window.open(result.ok.url, '_blank') }}>
                                            Читать в источнике
                                        </button>
                                        <div>{result.ok.attributes.wordCount.toLocaleString()} слов{numStrTag(result.ok.attributes.wordCount, "о", "а", "")}</div>
                                    </div>
                                </div>
                            </div>
                        ))) :
                            ("")}
                    </div>
                    {documentList.items.length > documentNumber ? (
                        <button className="text_info_bold" onClick={() => buttonFunc()}>Показать больше</button>
                    )
                        : ("")}
                </div>
            )
                : ("")}
        </>
    );
}

export default ResultPageDocuments;