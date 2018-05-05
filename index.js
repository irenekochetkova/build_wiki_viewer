


function getRandom() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
}

$.ajax( {
    url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2",
    
    dataType: 'jsonp',
   
   
    success: function(data) {
       console.log(data);
    }
} );