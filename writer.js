var app = document.getElementById("write");

var typewriter = new Typewriter(app, {
  loop: false
});

typewriter
  .typeString("Привет!")
  .pauseFor(2500)
  .deleteAll()
  .typeString("У меня для тебя есть небольшой подарок :)")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Но сперва одень наушники.")
  .pause()
  .callFunction(() => {
    let $btnHeadphones = $("#btn_yes");
    $($btnHeadphones).css("display", "initial");

    $btnHeadphones.on("click", () => {
      typewriter
        .deleteAll()
        .typeString("Отлично, а теперь послушай этот трек.")
        .pauseFor(2500)
        .callFunction(() => {
          document.getElementById("video").style.zIndex = 1;
        })
        .start();
    });
  })
  .start();
