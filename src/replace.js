function replaceHashtagsWithLinks(text) {
    // espressione regolare che identifica gli hashtag const regex = /#(\w+)/g;
        // funzione di sostituzione
        const replaceFunc = (match, hashtag) => {
    return `<a href="/api/tweet?hashtag=${hashtag}">${match}</a>`;
    };
    // esegue la sostituzione e restituisce il risultato return text.replace(regex, replaceFunc);
    }
    let text = "ciao sono #thelight e questa è la #simulazione"; let newText = replaceHashtagsWithLinks(text);
    /*
    Output:
    ciao sono <a href="/api/tweet?hashtag=thelight">#thelight</a> e questa è la <a href="/api/tweet?hashtag=simulazione">#simulazione</a> */
              console.log(newText);