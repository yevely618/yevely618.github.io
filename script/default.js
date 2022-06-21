//landing

history.scrollRestoration = "manual";

const day = document.querySelector('input[name="check"]');

let body = document.body;
let landing = document.querySelector('.landing');
let sub = document.querySelector('.sub');

function enter(e) {
    if (e.keyCode == 13) {
        check();
    }
}

function check() {
    if (day.value == 220425 || day.value == 20220425 || day.value == '0425') {
        landing.style.display = 'none';
        body.style.overflow = '';
        sub.style.visibility = 'visible';
        window.scrollTo(0,0);
    } else {
        alert('잘못된 날짜입니다');
        return;
    }
}

window.onload = function() {
    day.placeholder = '마지막 프메 날짜를 입력해주세요';
}


//message

const btnBottom = document.querySelector('.recent');
const btnTop = document.querySelector('.send');

function goUp() {
    document.querySelector('.start').scrollIntoView();
}

function goDown() {
    document.querySelector('.end').scrollIntoView();
}

function goBack() {
    window.scrollTo(0,0);
    location.reload();
    day.placeholder = 'Loading..';
}

function goTo() {
    let year = document.querySelector('input[name="yearBtn"]:checked').value;
    let month = document.querySelector('#month').value;
    let day = document.querySelector('#day').value;

    let date = year + '.' + month + '.' + day;
    
    let datebox = document.querySelectorAll('.datebox');

    for(i=0; i<datebox.length; i++) {
        let dateValue = datebox[i].innerHTML;

        if (dateValue.includes(date)) {
            let location = datebox[i].offsetTop - 90;
            window.scrollTo(0,location);
            calendar();
            return;
        }
    }
}


//calendar

const btnCalendar = document.querySelector('.calendar');

function calendar() {
    let search = document.querySelector('.search');
    if (search.style.display == 'none') {
        search.style.display = 'block';
    } else if (search.style.display == 'block') {
        search.style.display = 'none';
    }
}


//profile

function profile() {
    let toast = document.querySelector('.toast');
    if (toast.style.display == 'none') {
        toast.style.display = 'block';
    } else if (toast.style.display == 'block') {
        toast.style.display = 'none';
    }
}
