// // on scorll navbar
window.onscroll = function () {
    scrollFunction();
};
var first = true;
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add('fixed-navbar');
    }
    else {
        document.getElementById("navbar").classList.remove('fixed-navbar');
    }
}

function readMore(ele,eve){
  eve.preventDefault();
  var txt = document.querySelector(".read_more_text");
  txt.classList.toggle("show-few-lines");
  
  if(txt.classList.contains("show-few-lines")){
      ele.innerText = "Read More";
  }else{
      ele.innerText = "Read Less";
  }
}



// select box js 
function format(item, state) {
    if (!item.id) {
      return item.text;
    }
    var countryUrl = "https://hatscripts.github.io/circle-flags/flags/";
    var stateUrl = "https://oxguy3.github.io/flags/svg/us/";
    var url = state ? stateUrl : countryUrl;
    var img = $("<img>", {
      class: "img-flag",
      width: 26,
      src: url + item.element.value.toLowerCase() + ".svg"
    });
    var span = $("<span>", {
      text: " " + item.text
    });
    span.prepend(img);
    return span;
  }
  
  $(document).ready(function() {
    $("#countries").select2({
      templateResult: function(item) {
        return format(item, false);
      }
    });
    $("#us-states").select2({
      templateResult: function(item) {
        return format(item, true);
      }
    });
  });
  

// country code select box 
