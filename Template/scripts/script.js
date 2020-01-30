$(".link").on("click", function() {
  var i = $(this).index() - 4;
  var t =
    $("h1")
      .eq(i)
      .offset().top - 117;
  $("html, body").animate({ scrollTop: t }, 1000);
});

$(document).ready(function() {
  $(".point-up").on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  $(".home").on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});

function clock() {
  let time = document.getElementById("date");
  let currentTime = new Date();
  let hour = currentTime.getHours();
  let second = currentTime.getSeconds();
  let minutes = currentTime.getMinutes();
  let month = currentTime.getMonth() + 1;
  let day = currentTime.getDate();
  let year = currentTime.getFullYear();

  if (second < 10) {
    second = "0" + second;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (month < 10) {
    month = "0" + month;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  time.innerHTML = `${hour} : ${minutes} : ${second} (${day}/${month}/${year})`;
}
clock();
setInterval(clock, 1000);
