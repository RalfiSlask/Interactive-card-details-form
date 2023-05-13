// input variables

let input_name = document.querySelector(".input-name");
let input_numbers = document.querySelector(".input-numbers");
let input_months = document.querySelector(".input-months");
let input_years = document.querySelector(".input-years");
let input_cvc = document.querySelector(".input-cvc");
let inputs = document.querySelectorAll("input");

// card variables

let card_name = document.querySelector(".name");
let card_numbers = document.querySelector(".numbers");
let card_months = document.querySelector(".months");
let card_years = document.querySelector(".years");
let card_cvc = document.querySelector(".cvc");

// error variables

let errors = document.querySelectorAll(".error");
let error_numbers = document.querySelector(".error-number");
let error_name = document.querySelector(".error-name");
let error_month = document.querySelector(".error-month");
let error_year = document.querySelector(".error-year");
let error_cvc = document.querySelector(".error-cvc")

// regExp variables for checking if inputs contain numbers or letters

let regExp = new RegExp("[a-zA-Z]");
let regExpNumbers = new RegExp("[0-9]");

// other variables

let confirm_button = document.querySelector(".button-confirm");
let thank_modal = document.querySelector(".thankyou-container");
let date = new Date;
let current_year = parseInt(date.getFullYear().toString().slice(2));

const clickingOnButton = () => {
    confirm_button.addEventListener("click", () => {
        isInputEmpty();
        isNumbersValid();
        isNameCorrect();
        isMonthValid();
        isYearValid();
        isCvcValid()
    })
}

clickingOnButton();

const isNameCorrect = () => {
    if(input_name.value != "") {
        for(let i = 0; i < input_name.value.length; i++) {
            if(regExpNumbers.test(input_name.value)) {
                error_name.classList.remove("hidden");
                error_name.textContent = "Cant contain numbers"
            } else {
                error_name.classList.add("hidden");
                card_name.textContent = input_name.value;
            }
        }
    }

}

const isNumbersValid = () => {
    for(let i = 0; i < input_numbers.value.length; i++) {
        if(input_numbers.value.length < 19) {
            error_numbers.classList.remove("hidden")
            error_numbers.textContent = "The card number has to be 16 characters";
        }
        else if(input_numbers.value[4] != " " || input_numbers.value[9] != " " || input_numbers.value[14] != " ") {
            error_numbers.classList.remove("hidden")
            error_numbers.textContent = "You have to include spaces";
        }
        else if(regExp.test(input_numbers.value)) {
            error_numbers.textContent = "Wrong format, numbers only";
            error_numbers.classList.remove("hidden");
        } 
        else {
            error_numbers.classList.add("hidden");
            card_numbers.textContent = input_numbers.value;
        }    
    }
}

const isMonthValid = () => {
    if(input_months.value != "") {
        if(isNaN(parseInt(input_months.value))) {
            error_month.classList.remove("hidden")
            error_month.textContent = "Needs to be a number";
        } else if(input_months.value < 1 || input_months.value > 12) {
            error_month.classList.remove("hidden")
            error_month.textContent = "Not a valid month";
        } else {
            error_month.classList.add("hidden");
            if(input_months.value.length == 1) {
                card_months.textContent = "0" + input_months.value
            } else {
                card_months.textContent = input_months.value;
            }
          
        } 
    }
}

const isYearValid = () => {
    if(input_years.value != "") {
        for(let i = 0; i < input_years.value.length; i++) {
            if(isNaN((input_years.value.charAt(i)))) {
                error_year.classList.remove("hidden")
                error_year.textContent = "Needs to be a number";
            } else if(input_years.value < current_year) {
                error_year.classList.remove("hidden")
                error_year.textContent = "Needs to be in the future";
            } else {
                error_year.classList.add("hidden");
                card_years.textContent = input_years.value;
            }
        }
      
    } 
}

const isInputEmpty = () => {
  for(let i = 0; i < inputs.length; i++) {
    if(inputs[i].value == "") {
        errors[i].classList.remove("hidden");
        errors[i].textContent = "Cant be blank";
    if(inputs[3].value == "") {
        errors[3].textContent = "";
    }
    } else {
        errors[i].classList.add("hidden");
    }
  }
}

isCvcValid = () => {
    if(input_cvc.value != "") {
        if(isNaN(parseInt(input_cvc.value))) {
            error_cvc.classList.remove("hidden")
            error_cvc.textContent = "Needs to be a number";
        } else if(input_cvc.value.length < 3) {
            error_cvc.classList.remove("hidden")
            error_cvc.textContent = "Needs to be three characters";
        } else {
            error_cvc.classList.add("hidden");
            card_cvc.textContent = input_cvc.value;
        }
    }
}

const updateBorderColor = () => {
    for(let i = 0; i < errors.length; i++) {
        if(!errors[i].classList.contains("hidden")) {
            errors[i].previousElementSibling.style.border = "1px solid #FF5050";
        } else {
            errors[i].previousElementSibling.style.border = "1px solid #DFDEE0";
        }
    }
}

setInterval(updateBorderColor, 0);