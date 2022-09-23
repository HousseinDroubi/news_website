// We have to use here window.onload here in order to make the $.ajax into javascript file
window.onload=() =>{
$.ajax({
    url: "http://localhost/news_website/php/getnews.php",
    cache: false,
    success: function(data){

        // Convert data to json response
        data = JSON.parse(data);
        // The main div that will appendchild the cards containing the title and text.
        const all_news=document.getElementById("all_news");
        for (const element of data){
            //Defione all contents to appear once we append them to the main div
            const card=document.createElement("div");
            const row=document.createElement("div");
            const col=document.createElement("div");
            const card_body=document.createElement("div");
            const card_title=document.createElement("h5");
            const card_text=document.createElement("p");
            // Give each element its clasees
            card.classList.add("card");
            card.classList.add("mb-3");
            card.classList.add("mt-1");
            card.classList.add("border-success");
            card.style.maxWidth="540px";
            row.classList.add("row");
            row.classList.add("g-0");
            row.classList.add("d-flex");
            row.classList.add("justify-content-center");
            col.classList.add("col-md-8");
            card_body.classList.add("card-body");
            card_title.classList.add("card-title");
            card_text.classList.add("card-text");
            // Start appending every mother div, its specific child
            card_body.appendChild(card_title);
            card_body.appendChild(card_text);
            col.appendChild(card_body);
            row.appendChild(col);
            card.appendChild(row);
            card_title.innerText=element.title
            card_text.innerText=element.text;
            // all_news div will contain all the divisions. Hence, it will be written in the last line of this for.
            all_news.appendChild(card); 
        }
    }
});
}//End of window.onload() 