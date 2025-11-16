$(function() {
  const button = $("#btn");
  const videoArea = $("#video");
  const titleArea = $("#title");
  const contentArea = $("#content");
  let number = 0;
  let data = [];

  function getData() {
    return $.ajax('ajax.json',{  
      type: 'GET',
    })
  };

  function changeVideo() {
    button.click(function(){
      if (data.length === 0) {
        getData().then(function(response){ 
          data = response;
        });
      }

      videoArea.attr('src', data[number].url);
      titleArea.html(data[number].title);
      contentArea.html(data[number].content);
      number == 2 ? number = 0 : number++;
    });
  };

  changeVideo();
})