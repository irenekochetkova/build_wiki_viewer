function getRandom() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
}

// $(document).ready(function() {
  $("#input-search").on("click", function() {
     $("ul").empty();
    var searchInput = $("#textName").val();
   
    $.ajax ({
     
  
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&prop=extracts&exsentences=1&search="+searchInput+"&limit=8&callback=?",

       dataType: "json",
   
   
    success: function(data) {
       console.log(data);
      
    }
    });
  });
// });