chrome.runtime.onMessage.addListener(function (request, sender, callback){
    if (request.getList){
        console.clear();
        var h1Text = $('h1').first().text();

        var paragraphText = $('p');
        var filteredtext = "";
        for (let p of paragraphText){
            const p_text = $(p).text();
            console.log("paragraph text", p_text)
            if (p_text.includes(".")){
                filteredtext += p_text;
                filteredtext += "\n";
            }
        }

        console.log(filteredtext)


        callback({success:true, header: h1Text, article: filteredtext});
    }
    return true;
   
});