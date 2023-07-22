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
            
            const summarize_button = document.getElementById("Summarize");
            const summarized_text = document.getElementById("Summarized Text");
            const article_heading = document.getElementById("heading");
            summarize_button.addEventListener("click", populateMessage)


        }) 
    })
});
