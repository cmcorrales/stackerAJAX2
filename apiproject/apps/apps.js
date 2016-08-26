$(function(){
  $("button").click(function() {
    var userSearch = $("#query").val();
  var params = {
    part: 'snippet',
    key: 'AIzaSyDG27eYT7rMfcDJpDCgxELZY3DNI02F0P0',
    q: userSearch,
    r: 'json',
    type: 'video'
  };
  $.getJSON('https://www.googleapis.com/youtube/v3/search', params, function(data){
    //showResults(videos.list);
    $.each(data.items, function() {
      var videotitle = this.snippet.title;
      var videoid = this.id.videoId;
      var thumbnail = this.snippet.thumbnails.medium.url;
        $('#search-results').append("<a href='https://www.youtube.com/watch?v="+videoid+"'><h2>"+videotitle+"</h2><img src='"+thumbnail+"'></a>")
    })
  });
});
});
