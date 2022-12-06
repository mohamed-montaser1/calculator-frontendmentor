const all_buttons = document.querySelectorAll(".buttons button");
const all_num_btns = document.querySelectorAll(".main-keys button");
const screen = document.querySelector(".screen");
const resetBtn = document.querySelector("#clear");
var ans = "";
let opr = ["*", "/", "+", "-"];
const result = () => {
  ans = eval(screen.value);
  return ans;
};

for (let i = 0; i < all_buttons.length; i++) {
  all_buttons[i].addEventListener("click", (e) => {
    let clicked_btn = all_buttons[i];
    let clicked_btn_val = all_buttons[i].innerHTML;

    if (clicked_btn.dataset.e) {
      if (screen.value !== "") {
        screen.value = result();
        document.body.dataset.clicked = true;
      }
    } else if (clicked_btn_val == "x") {
      screen.value += "*";
    } else if (clicked_btn_val === "RESET") {
      screen.value = "";
    } else if (clicked_btn_val === "DEL") {
      screen.value = screen.value.slice(0, -1);
    } else {
      // this function check if you have already anser
      if (ans !== "" && screen.value == ans) {
        if (!opr.includes(clicked_btn_val)) {
          ans = "";
          screen.value = "";
          screen.value += clicked_btn_val;
        } else {
          screen.value += clicked_btn_val;
        }
      } else {
        screen.value += clicked_btn_val;
      }
    }
  });
}

// themes
let all_themes_togglers = document.querySelectorAll(".theme-index span");

all_themes_togglers.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (el.innerHTML == "1") {
      // dark theme
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      document.body.classList.remove("contrast");
      // justify-content: left;
      document.querySelector(".track").style.justifyContent = "left";
    } else if (el.innerHTML == "2") {
      // light theme
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      document.body.classList.remove("contrast");
      document.querySelector(".track").style.justifyContent = "center";
    } else if (el.innerHTML == "3") {
      // high contrast theme
      document.body.classList.add("contrast");
      document.body.classList.remove("light");
      document.body.classList.remove("dark");
      document.querySelector(".track").style.justifyContent = "right";
    }
  });
});
