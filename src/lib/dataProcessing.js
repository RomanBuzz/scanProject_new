import { search } from "../services/scanInterfax";

const extractImageSource = (str) => {
    if ((str === null) || (str === ''))
        return false;
    else {
        let imageSource = str.match(/img src=("|')([^]+)("|')/);
        if (imageSource) {
            return imageSource[0].replace(/(img src=|"|')+/ig, '');
        } else return false;
    }
}

const removeTags = (str) => {
    if ((str === null) || (str === ''))
        return '';
    else {
        let result = str.toString()
            .replace(/\n/ig, '')
            .replace(/&lt;\/p&gt;/ig, '\n')
            .replace(/&lt;/ig, '<')
            .replace(/&gt;/ig, '>')
            .replace(/(<([^>]+)>)/ig, '')
            .replace(/(\n)+/ig, '\n\n')
            .replace(/\n1во\n/ig, '');
        return result.trim();
    }
}

const numStrTag = (num, ending1, ending2, ending3) => {
    if (num % 10 === 1 && num % 100 !== 11) {
        return ending1;
    } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
        return ending2;
    }
    return ending3;
}

const searchProcessing = (data, request, setRequest, setLoaded, setEntries, setDocumentList) => {
    if (data.data) {
        if (data.data[0]) {
            let result = [];
            let oneDate, date, all, risk;
            let total = 0;
            for (let i = 0; i < data.data[0].data.length; i++) {
                oneDate = {};
                date = new Date(data.data[0].data[i].date);
                all = data.data[0].data[i].value;
                risk = 0;
                for (let k = 0; k < data.data[1].data.length; k++) {
                    if (data.data[0].data[i].date == data.data[1].data[k].date) {
                        risk = data.data[1].data[k].value;
                    }
                }
                oneDate = { "date": date, "all": all, "risk": risk };
                result.push(oneDate);
                total += all;
            }
            if (total > 0) {
                result.sort((a, b) => new Date(a.date) - new Date(b.date));
                setLoaded(result);
                setEntries(total);
                search(...request, "objectsearch").then((data) => setDocumentList(data));
            } else {
                alert("Поиск не дал результатов!");
                setRequest(false);
            }
        } else {
            alert("Поиск не дал результатов!");
            setRequest(false);
        }
    } else {
        alert("Поиск не дал результатов!");
        setRequest(false);
    }
}

export { extractImageSource, removeTags, numStrTag, searchProcessing };