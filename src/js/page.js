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


chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === 'install') {
      // Redirect the user to your landing page
      chrome.tabs.create({ url: 'https://summarize-extension-80316dc1c6da.herokuapp.com/welcome' });
    }
  });
  