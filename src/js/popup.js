$(document).ready(function() {
    chrome.tabs.query({active:true, currentWindow:true}, function (tabs) {
        console.log(tabs);
        chrome.tabs.sendMessage(tabs[0].id, { getList: 1 }, function(response){
            function populateMessage() {
                summarize_button.style.display = "none";
                $(summarized_text).append(
                    '<h1>' + "Summarized Text:" + '</h1>' + 
                    '<p>' + response.article + '</p>'
                )
                $(article_heading).append(
                    '<h2>' + "Article Heading: " + '</h2>' + 
                    '<h3>' + response.header + '</h3>'
                )
            }

            function fetchSummary() {

                document.getElementById("loading").style.display = "block";


                const URL = `https://summarize-extension-80316dc1c6da.herokuapp.com/summarize`;
                fetch(URL, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'text/plain'
                  },
                  body: response.article
                })
                .then(response => {
                    if (!response.ok) {
                      console.clear();
                      throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                    
                })
                .then(data => {
                    var summary = data.text
                    console.log('Summary:', summary);

                    $(summarized_text).append(
                        '<h1>' + "Summarized Text:" + '</h1>' + 
                        '<p>' + summary + '</p>'
                    )
                    document.getElementById("loading").style.display = "none";
                    summarize_button.style.display = "none";
                })
                .catch(error => {
                    console.clear()
                    console.error('Error:', error);
                });

            }
            
            const summarize_button = document.getElementById("Summarize");
            const summarized_text = document.getElementById("Summarized Text");
            const article_heading = document.getElementById("heading");
            summarize_button.addEventListener("click", fetchSummary)


        }) 
    })
});
