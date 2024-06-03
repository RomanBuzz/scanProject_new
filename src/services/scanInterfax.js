async function login(login, password, setAuthorized, navigate, wrongPassword) {
    try {
        fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "login": login,
                "password": password
            })
        }).then(data => data.json()).then(token => {
            localStorage.setItem("token", JSON.stringify(token));
            if (JSON.parse(localStorage.getItem('token')).accessToken) {
                setAuthorized();
                navigate();
            } else {
                wrongPassword();
            }
        });
    } catch (error) {
        throw error;
    }
}

function logout() {
    if (localStorage.getItem('token')) {
        localStorage.removeItem("token");
    }
}

async function info() {
    try {
        if (localStorage.getItem('token')) {
            let token = JSON.parse(localStorage.getItem('token')).accessToken;
            let expireDate = new Date(JSON.parse(localStorage.getItem('token')).expire);
            let currentDate = new Date();
            if (expireDate > currentDate) {
                const res = await fetch('https://gateway.scan-interfax.ru/api/v1/account/info', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                });
                return res.json();
            }
        }
    } catch (error) {
        throw error;
    }
}

async function search(startDate, endDate, inn, tonality, limit,
    maxFullness = true, inBusinessNews = true, onlyMainRole = true, onlyWithRiskFactors = false,
    excludeTechNews = true, excludeAnnouncements = false, excludeDigests = true, api = "histograms") {
    try {
        if (localStorage.getItem('token')) {
            let token = JSON.parse(localStorage.getItem('token')).accessToken;
            let expireDate = new Date(JSON.parse(localStorage.getItem('token')).expire);
            let currentDate = new Date();
            let path = api == "objectsearch" ? ('https://gateway.scan-interfax.ru/api/v1/objectsearch')
                : ('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms');
            let body = {
                "issueDateInterval": {
                    "startDate": startDate,
                    "endDate": endDate
                },
                "searchContext": {
                    "targetSearchEntitiesContext": {
                        "targetSearchEntities": [
                            {
                                "type": "company",
                                "sparkId": null,
                                "entityId": null,
                                "inn": inn,
                                "maxFullness": maxFullness,
                                "inBusinessNews": inBusinessNews
                            }
                        ],
                        "onlyMainRole": onlyMainRole,
                        "tonality": tonality,
                        "onlyWithRiskFactors": onlyWithRiskFactors,
                        "riskFactors": {
                            "and": [],
                            "or": [],
                            "not": []
                        },
                        "themes": {
                            "and": [],
                            "or": [],
                            "not": []
                        }
                    },
                    "themesFilter": {
                        "and": [],
                        "or": [],
                        "not": []
                    }
                },
                "searchArea": {
                    "includedSources": [],
                    "excludedSources": [],
                    "includedSourceGroups": [],
                    "excludedSourceGroups": []
                },
                "attributeFilters": {
                    "excludeTechNews": excludeTechNews,
                    "excludeAnnouncements": excludeAnnouncements,
                    "excludeDigests": excludeDigests
                },
                "similarMode": "duplicates",
                "limit": Number(limit),
                "sortType": "sourceInfluence",
                "sortDirectionType": "desc",
                "intervalType": "day",
                "histogramTypes": [
                    "totalDocuments",
                    "riskFactors"
                ]
            };
            if (expireDate > currentDate) {
                const res = await fetch(path, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(body)
                });
                return res.json();
            }
        }
    } catch (error) {
        throw error;
    }
}

async function getDocuments(data, firstPosition = 0, lastPosition = 9) {
    try {
        if (localStorage.getItem('token')) {
            let token = JSON.parse(localStorage.getItem('token')).accessToken;
            let expireDate = new Date(JSON.parse(localStorage.getItem('token')).expire);
            let currentDate = new Date();
            let path = "https://gateway.scan-interfax.ru/api/v1/documents";
            let idsList = [];
            if (firstPosition < data.items.length) {
                let checkedLastPosition = lastPosition < data.items.length ? (lastPosition) : (data.items.length - 1);
                for (let i = firstPosition; i <= checkedLastPosition; i++) {
                    let encodedId = data.items[i].encodedId;
                    idsList.push(encodedId);
                }
                let body = { "ids": idsList };
                if (expireDate > currentDate) {
                    const res = await fetch(path, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                            "Authorization": `Bearer ${token}`
                        },
                        body: JSON.stringify(body)
                    });
                    return res.json();
                }
            }
        }
    } catch (error) {
        throw error;
    }
}

export { login, logout, info, search, getDocuments };