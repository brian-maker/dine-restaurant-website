const dropdownMenu = document.getElementById('dropdown-menu')
const dropdownItems = document.querySelectorAll('.dropdown-item')
const selectedMeridien = document.getElementById('selected-meridiem')
const dropdownTrigger = document.getElementById('trigger')
const dropdownArrow = document.getElementById('dropdown-arrow')

// update number of people
const numberOfPeople = document.getElementById('number-of-people')
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")

//reservation button
const reservationBtn = document.getElementById("btn-reservation")

// form elements
const name = document.querySelector("input[name ='name']");
const email = document.querySelector("input[name ='email']");
const month = document.querySelector("input[name ='month']");
const day = document.querySelector("input[name ='date']");
const year = document.querySelector("input[name ='year']");
const hour = document.querySelector("input[name ='hour']");
const minute = document.querySelector("input[name ='minutes']");
const errors = document.querySelectorAll('p.errormsg');
const inputBoxes = document.querySelectorAll("input.input-box");
const datetimeFields = document.querySelectorAll('p.datetime-field-name');



dropdownTrigger.onclick = () =>{
    dropdownMenu.classList.toggle('open');
    dropdownArrow.classList.toggle('open');
}

dropdownItems.forEach(item => {
    item.onclick = () => {
        selectedMeridien.textContent = item.children[1].textContent;

        //remove the old checked class
        dropdownItems.forEach(oldItem => {
            oldItem.children[0].classList.remove('checked');
        });

        // add checked class to the current clicked item
        item.children[0].classList.add('checked');
    }
})



minus.onclick = () => changeNumberOfPeople(false);
plus.onclick = () => changeNumberOfPeople(true);

function changeNumberOfPeople(isPlus){
    let currentNumberOfPeople = parseInt(numberOfPeople.textContent);

    if(isPlus){
        numberOfPeople.textContent = currentNumberOfPeople + 1
    }else{
        if(currentNumberOfPeople != 1){
            numberOfPeople.textContent = currentNumberOfPeople -1
        }
    }
}

reservationBtn.onclick =()=>{
    formValidate();
}

function formValidate(){
    if(name.value ==''){
        errors[0].classList.add('show');
        inputBoxes[0].classList.add('error');
    }
    if(email.value == ''){
        errors[1].classList.add('show');
        inputBoxes[1].classList.add('error');
    }
    if(month.value =='' || day.value =='' ||year.value==''){
        errors[2].classList.add('show');
        datetimeFields[0].classList.add('error');
        if(month.value == ''){
            inputBoxes[2].classList.add('error');
        }
        if(day.value == ''){
            inputBoxes[3].classList.add('error');
        }
        if(year.value == ''){
            inputBoxes[4].classList.add('error');
        }
    }
    if(hour.value =='' || minute.value ==''){
        errors[3].classList.add('show')
        datetimeFields[1].classList.add('error');
        if(hour.value == ''){
            inputBoxes[5].classList.add('error');
        }
        if(minute.value ==''){
            inputBoxes[6].classList.add('error');
        }
    }
}

inputBoxes.forEach((box,i) =>{
    // remove error status on focus
    box.onfocus = () =>{
        box.classList.remove('error');
        if(i == 0){
            errors[0].classList.remove('show');
        }else if(i ==1){
            errors[1].classList.remove('show');
        }else if(1 > 1 && i < 5){
            errors[2].classList.remove('show');
            datetimeFields[0].classList.remove('error');
        }else{
            errors[3].classList.remove('show');
            datetimeFields[1].classList.remove('error');
        }
    }
});


