$(".gallery").colorbox({
  rel: 'gallery',
  transition: "fade",
  width: "75%",
  height: "75%"
});





//creates search filter
function myFunction() {
  var input, filter, ul, li, a, i, txtValue, b;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++)



  {
    //assignd the attributes
    a = li[i].getElementsByTagName("img")[0].getAttribute("alt");
    b = li[i].getElementsByTagName("img")[0].getAttribute("title");


    //searches through the attributes
    if ((a.toUpperCase().indexOf(filter) > -1) || (b.toUpperCase().indexOf(filter) > -1)) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
//search filter ends
