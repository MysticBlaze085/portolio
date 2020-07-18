function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function() {
  $(".reBtn").click(function() {
    $(".reBtn").fadeOut("slow");
    $("#fadeOne").fadeIn();
    $("#fadeTwo").fadeIn(3000);
    $("#fadeThree").fadeIn(3000);
  });
});

$(document).ready(function() {
  $(".about").click(function() {
    $("#about").show("slow");
  });
});
$(document).ready(function() {

  $(".filter-button").click(function() {
    var value = $(this).attr('data-filter');

    if (value == "all") {
      $('.filter').removeClass('hidden');
      $('.filter').show('1000');
    } else {
      $('.filter[filter-item="' + value + '"]').removeClass('hidden');
      $(".filter").not('.filter[filter-item="' + value + '"]').addClass('hidden');
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');

    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");

});

function hoverImageFade(param) {
  $("#floated_img." + param).hover(function() {
    $(".gallery_product." + param).addClass("activeImage");
    $("#floated_img." + param).css("opacity", "1");
    $("#floated_img." + param + " img.top").css("opacity", "0");
    $("#floated_img." + param + " .text").css("opacity", "1");
  })
  $("#floated_img." + param).mouseleave(function() {
    $(".gallery_product." + param).removeClass("activeImage");
    $("#floated_img." + param + " img.top").css("opacity", "1");
    $("#floated_img." + param + " .text").css("opacity", "0");
  })
}
hoverImageFade("one");
hoverImageFade("two");
hoverImageFade("three");
hoverImageFade("four");
hoverImageFade("five");
hoverImageFade("six");