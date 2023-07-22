chrome.runtime.onMessage.addListener(function (request, sender, callback){
    if (request.getList){
        console.clear();
        var h1Text = $('h1').first().text();

        var paragraphText = $('p');
        var filteredtext;
        for (let p of paragraphText){
            const p_text = $(p).text();
            if (p_text.includes(".") && !p_text.includes("\n")){
                filteredtext += ' ' + p_text;
            }
        }
        callback({success:true, header: h1Text, article: filteredtext});
    }
    return true;
   
});