function getRandom() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
}

$(document).ready(function() {
  $(".button").keypress(function() {
     $("#link").empty();
    var searchInput = $("#textName").val();
   
    $.ajax ({
     
  
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search="+searchInput,

       dataType: "json",
   
   
    success: function(data) {
       console.log(data);

       for (var i = 0; i < 10; i++) {
        var searchUrl = data[3][i];
        var title = data[1][i];
        var quote = data[2][i];

       var html = "<div ><a  href="+searchUrl+"><h4>"+title+"</h4>"+quote+"</a></div>";
         $("#link").append(html);
       }
    }
    });
  });
});