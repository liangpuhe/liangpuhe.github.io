jQuery.fn.forceNumeric = function () {
  return this.each(function () {
    $(this).keydown((e) => {
      const key = e.which || e.keyCode;
      console.log(key);
      if (
        (!e.altKey && !e.ctrlKey && key >= 48 && key <= 57) ||
        (key >= 96 && key <= 105) ||
        key == 190 ||
        key == 188 ||
        key == 109 ||
        key == 110 ||
        key == 8 ||
        key == 9 ||
        key == 13 ||
        key == 35 ||
        key == 36 ||
        key == 37 ||
        key == 39 ||
        key == 46 ||
        key == 45 ||
        key == 189
      )
        return true;
      return false;
    });
  });
};

function setEmojiViz(cTemp) {
  let str;
  switch(Math.floor(cTemp/10)) {
    case -3:
      str = "🧟"
      break;
    case -2:
      str = "🥶"
      break;
    case -1:
      str = "🧣"
      break;
    case 0:
      str = "🧊"
      break;
    case 1:
      str = "🌱"
      break;
    case 2:
      str = "👕"
      break;
    case 3:
      str = "🏝"
      break;
    case 4:
      str = "🌋"
      break;
    default:
      str = ""
  };

  if (str !== "") {
    emoji.fadeOut(100, function(){
      $(this).text(str).show();
      $(this).animate({fontSize: "110px"}, 150)
        .animate({fontSize: "100px"}, 50)
    });
  } else {
    $(this).text(str).show();
  }
}

function setTemperatureViz(cTemp) {
  // const height = (cTemp + 32 + 2.8) * 0.7;
  const height = (cTemp + 30) * 0.7
  temp.delay(1200).clearQueue().animate({
    height: height + 'vh'
  }, 1000);
}

function celsiusToFahrenheit() {
  const cTemp = parseFloat(celInput.val());
  const fTemp = (cTemp * 9 / 5) + 32;
  const roundedFTemp = Math.round(fTemp);
  frInput.val(roundedFTemp);
  // result.html(roundedFTemp);
  // result.css("color", "#fa7676");
  setTemperatureViz(cTemp);
  timer = setTimeout(setEmojiViz, typingInterval, cTemp);
  if (isNaN(frInput.val())) {
      frInput.val('');
  }
}

function fahrenheitToCelsius() {
  const fTemp = parseFloat(frInput.val());
  const cTemp = (fTemp - 32) * (5 / 9);
  const roundedCTemp = Math.round(cTemp);
  celInput.val(roundedCTemp);
  // result.html(roundedCTemp);
  // result.css("color", "#329cfc");
  setTemperatureViz(cTemp);
  timer = setTimeout(setEmojiViz, typingInterval, cTemp);
  if (isNaN(celInput.val())) {
      celInput.val('');
  }
}

function convert() {
  frInput.keyup(() => {
    fahrenheitToCelsius();
  });
  frInput.keydown(() => {
    clearTimeout(timer);
  })

  celInput.keyup(() => {
    celsiusToFahrenheit();
  });
  celInput.keydown(() => {
    clearTimeout(timer);
  })
  
}
