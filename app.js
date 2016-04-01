$(function(){

  var superGif = {};
  $(".superGif").on("click", function(){
    console.log('click');
    $.ajax({
      url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC",
      type: 'GET'
      }).done(function(response){
      console.log(response);
      superGif = response.data;
      futurize(superGif);
    });

  });

  function futurize(robot){
    console.log(robot);
    $("#gifReviel").append("<img src=\"" + robot.image_url + "\">");
  }















});
