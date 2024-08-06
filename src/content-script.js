if (document.location.host === 'www.google.com') {
if (document.location.pathname === '/search') {
    var href = document.location.search
    var search = decodeURI(href.split('&')[0].replace('?q=', ''))
    const cyrillic = 'йцукеёнгшщзхфывапролджэячсмитьбюЙЦУКЕЁНГШЩЗХФЫВАПРОЛДЖЭЯЧСМИТЬБЮ'.split('')
    var searchType = "google.com"
    
    cyrillic.forEach(function(ru_letter) {
        search.split('').forEach(function(search_letter) {
            if (search_letter === ru_letter) {
                searchType = "ya.ru"
            }
        });
    });
    
    if (searchType !== "google.com") {
        document.location = 'https://ya.ru/search/?text=' + search
    }
    
}}