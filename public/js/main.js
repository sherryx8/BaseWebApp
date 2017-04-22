
function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("NEWWW PARAGRAPH #javascript #fire");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#doge-image").append(`<img class="img-circle" src="/images/wowdoge.jpeg" />`);
}

function myFunction2() {

$("#demo2").html("bye");

$("#bb8-image").append('<button class="mybutton" onclick="myFunction3()"/>');
}

function myFunction3() {

$("mybutton").remove();



}
