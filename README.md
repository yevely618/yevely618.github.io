<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Jiho Private Message</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1">
    <script src="./script/vue.global.prod.js" defer></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script type="module" src="./script/script.js" defer></script>
</head>
<body style="overflow: hidden;">
<div class="landing" style="display: block;">
    <div class="alarm" style="visibility: visible;">
        <h5>Artist Message</h5>
        <span>지호 프라이빗 메세지가 도착했어요!</span>
    </div>
    <div class="enter">
        <input class="check" name="check" type="number" placeholder="Loading.." onkeypress="enter(event)" onfocus="hide()" onfocusout="show()" />
        <button class="enterBtn" onclick="check()">입장하기</button>
    </div>
    <div class="contact">
        <a class="loading" href="https://twitter.com/jihoud" target="_blank">지호야 보고싶어.. @jihoud</a>
    </div>
</div>
<div id="app" class="sub" style="visibility: hidden;">
    <div class="start"></div>
    <nav>
        <div class="menu" onclick="goBack()"><i class="fa-solid fa-angle-left"></i></div>
        <div class="artist"><span onclick="goUp()">지호</span></div>
        <div class="calendar" onclick="calendar()"><i class="fa-regular fa-calendar"></i></div>
    </nav>
    <div class="search" style="display: none;">
        <div class="year">
            <input type="radio" @click="month='04'" class="yearBtn" name="yearBtn" id="year1" v-model="year" value="2021" checked><label for="year1">2021</label>
            <input type="radio" @click="month='01'" class="yearBtn" name="yearBtn" id="year2" v-model="year" value="2022"><label for="year2">2022</label>
        </div>
        <div class="month">
            <select name="month" id="month" class="select" v-model="month">
                <option v-if="year==2021" v-for="months in monthList1" :value="months.value">{{ months.label }}</option>
                <option v-if="year==2022" v-for="months in monthList2" :value="months.value">{{ months.label }}</option>
            </select>
        </div>
        <div class="day">
            <select name="day" id="day" class="select">
                 <option v-if="year=='2021'&&month=='04'" v-for="days in dayList2104" :value="days.value">{{ days.label }}</option>
                 <option v-if="year=='2021'&&month=='05'" v-for="days in dayList2105" :value="days.value">{{ days.label }}</option>
                 <option v-if="year=='2021'&&month=='06'" v-for="days in dayList2106" :value="days.value">{{ days.label }}</option>
                 <option v-if="year=='2021'&&month=='07'" v-for="days in dayList2107" :value="days.value">{{ days.label }}</option>
                 <option v-if="year=='2021'&&month=='08'" v-for="days in dayList2108" :value="days.value">{{ days.label }}</option>
                 <option v-if="year=='2021'&&month=='09'" v-for="days in dayList2109" :value="days.value">{{ days.label }}</option>
                 <option v-if="year=='2021'&&month=='10'" v-for="days in dayList2110" :value="days.value">{{ days.label }}</option>
                 <option v-if="year=='2021'&&month=='11'" v-for="days in dayList2111" :value="days.value">{{ days.label }}</option>
                 <option v-if="year=='2021'&&month=='12'" v-for="days in dayList2112" :value="days.value">{{ days.label }}</option>
                 <option v-if="year=='2022'&&month=='01'" v-for="days in dayList2201" :value="days.value">{{ days.label }}</option>
                 <option v-if="year=='2022'&&month=='02'" v-for="days in dayList2202" :value="days.value">{{ days.label }}</option>
                 <option v-if="year=='2022'&&month=='03'" v-for="days in dayList2203" :value="days.value">{{ days.label }}</option>
                 <option v-if="year=='2022'&&month=='04'" v-for="days in dayList2204" :value="days.value">{{ days.label }}</option>
            </select>
        </div>
        <div class="move">
            <button class="moveBtn" onclick="goTo()">이동</button>    
        </div>
    </div>
    <main>
        <article v-for="(dates,i) in list">
            <div class="date">
                <div class="datebox">
                    {{ dates.date }}
                </div>
            </div>
            <section v-for="(talks,i) in list[i].talk">
                <div class="info">
                    <div class="profile"><img :src="`./img/${profile}`" alt="프로필사진"></div>
                    <div class="name">지호</div>
                </div>
                <div class="content">
                    <div class="message">{{ talks.text }}<img v-if="talks.img!=null" :src="talks.img"></div>
                    <div class="time">{{ talks.time }}</div>
                </div>
            </section>
        </article>
    </main>
    <div class="toast" style="display: none">
        <div class="container">
            <div class="image" v-for="index in 5" :key="index">
                <input type="radio" @click="setImg('profile'+index)" class="imgBtn" name="image" :id="'profile'+index" :value="'profile'+index" checked>
                <label :for="'profile'+index"><img :src="'./img/profile'+index+'.jpg'" :alt="'profile'+index"></label>
            </div>
        </div>
    </div>
    <footer>
        <div class="recent" onclick="goDown()">
            최신 메시지로 이동 <i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="textbox">
            <form @submit="setNick">
                <div class="nickname">
                        <input type="text" autocomplete="off" name="nick" placeholder="애칭을 입력해주세요" maxlength="10" :value="nickname" @input="inputNick">
                </div>
                <div class="smile" onclick="profile()"><i class="fa-solid fa-face-smile"></i></div>
                <button class="send"><i class="fa-solid fa-arrow-up"></i></button>
            </form>
        </div>
    </footer>
    <div class="end"></div>
</div>
<script type="text/javascript" src="./script/default.js"></script>
</body>
</html>
