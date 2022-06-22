const app = Vue.createApp({
    data() {
        return {
            profile: "profile5.jpg",
            nickname: "",
            list:[],
            year:"2021",
            month:"04",
            monthList1:[
                {"label":"4월", "value":"04"},
                {"label":"5월", "value":"05"},
                {"label":"6월", "value":"06"},
                {"label":"7월", "value":"07"},
                {"label":"8월", "value":"08"},
                {"label":"9월", "value":"09"},
                {"label":"10월", "value":"10"},
                {"label":"11월", "value":"11"},
                {"label":"12월", "value":"12"}
            ],
            monthList2:[
                {label:"1월", value:"01"},
                {label:"2월", value:"02"},
                {label:"3월", value:"03"},
                {label:"4월", value:"04"}
            ],
            dayList2104: [
                {label:"15일", value:"15"},
                {label:"18일", value:"18"},
                {label:"21일", value:"21"},
                {label:"24일", value:"24"},
                {label:"26일", value:"26"},
                {label:"28일", value:"28"},
                {label:"30일", value:"30"}
            ],
            dayList2105: [
                {label:"2일", value:"02"},
                {label:"5일", value:"05"},
                {label:"7일", value:"07"},
                {label:"8일", value:"08"},
                {label:"14일", value:"14"},
                {label:"18일", value:"18"},
                {label:"19일", value:"19"},
                {label:"20일", value:"20"},
                {label:"28일", value:"28"},
                {label:"29일", value:"29"}
            ],
            dayList2106: [
                {label:"1일", value:"01"},
                {label:"2일", value:"02"},
                {label:"7일", value:"07"},
                {label:"17일", value:"17"},
                {label:"21일", value:"21"},
                {label:"22일", value:"22"},
                {label:"28일", value:"28"},
                {label:"29일", value:"29"}
            ],
            dayList2107: [
                {label:"1일", value:"01"},
                {label:"12일", value:"12"},
                {label:"17일", value:"17"},
                {label:"19일", value:"19"},
                {label:"22일", value:"22"},
                {label:"25일", value:"25"}
            ],
            dayList2108: [
                {label:"2일", value:"02"},
                {label:"9일", value:"09"},
                {label:"10일", value:"10"},
                {label:"16일", value:"16"},
                {label:"18일", value:"18"},
                {label:"21일", value:"21"},
                {label:"23일", value:"23"},
                {label:"26일", value:"26"}
            ],
            dayList2109: [
                {label:"1일", value:"01"},
                {label:"7일", value:"07"},
                {label:"8일", value:"08"},
                {label:"10일", value:"10"},
                {label:"13일", value:"13"},
                {label:"15일", value:"15"},
                {label:"16일", value:"16"},
                {label:"18일", value:"18"},
                {label:"19일", value:"19"},
                {label:"22일", value:"22"},
                {label:"25일", value:"25"},
                {label:"27일", value:"27"},
                {label:"30일", value:"30"}
            ],
            dayList2110: [
                {label:"4일", value:"04"},
                {label:"9일", value:"09"},
                {label:"11일", value:"11"},
                {label:"14일", value:"14"},
                {label:"17일", value:"17"},
                {label:"19일", value:"19"},
                {label:"20일", value:"20"},
                {label:"23일", value:"23"},
                {label:"25일", value:"25"},
                {label:"27일", value:"27"},
                {label:"28일", value:"28"},
                {label:"30일", value:"30"},
                {label:"31일", value:"31"}
            ],
            dayList2111: [
                {label:"2일", value:"02"},
                {label:"5일", value:"05"},
                {label:"9일", value:"09"},
                {label:"10일", value:"10"},
                {label:"12일", value:"12"},
                {label:"14일", value:"14"},
                {label:"17일", value:"17"},
                {label:"18일", value:"18"},
                {label:"21일", value:"21"},
                {label:"23일", value:"23"},
                {label:"25일", value:"25"},
                {label:"26일", value:"26"},
                {label:"29일", value:"29"},
                {label:"30일", value:"30"}
            ],
            dayList2112: [
                {label:"2일", value:"02"},
                {label:"8일", value:"08"},
                {label:"9일", value:"09"},
                {label:"15일", value:"15"},
                {label:"19일", value:"19"},
                {label:"21일", value:"21"},
                {label:"22일", value:"22"},
                {label:"23일", value:"23"},
                {label:"27일", value:"27"},
                {label:"28일", value:"28"},
                {label:"30일", value:"30"}
            ],
            dayList2201: [
                {label:"3일", value:"03"},
                {label:"4일", value:"04"},
                {label:"6일", value:"06"},
                {label:"8일", value:"08"},
                {label:"11일", value:"11"},
                {label:"17일", value:"17"},
                {label:"18일", value:"18"},
                {label:"20일", value:"20"},
                {label:"24일", value:"24"},
                {label:"26일", value:"26"}
            ],
            dayList2202: [
                {label:"2일", value:"02"},
                {label:"5일", value:"05"},
                {label:"9일", value:"09"},
                {label:"10일", value:"10"},
                {label:"11일", value:"11"},
                {label:"12일", value:"12"},
                {label:"14일", value:"14"},
                {label:"16일", value:"16"},
                {label:"18일", value:"18"},
                {label:"19일", value:"19"},
                {label:"24일", value:"24"},
                {label:"28일", value:"28"}
            ],
            dayList2203: [
                {label:"2일", value:"02"},
                {label:"4일", value:"04"},
                {label:"6일", value:"06"},
                {label:"7일", value:"07"},
                {label:"8일", value:"08"},
                {label:"9일", value:"09"},
                {label:"11일", value:"11"},
                {label:"17일", value:"17"},
                {label:"23일", value:"23"},
                {label:"24일", value:"24"},
                {label:"26일", value:"26"},
                {label:"28일", value:"28"},
                {label:"30일", value:"30"}
            ],
            dayList2204: [
                {label:"1일", value:"01"},
                {label:"4일", value:"04"},
                {label:"9일", value:"09"},
                {label:"10일", value:"10"},
                {label:"12일", value:"12"},
                {label:"13일", value:"13"},
                {label:"15일", value:"15"},
                {label:"18일", value:"18"},
                {label:"25일", value:"25"}
            ]
        }
    },
    methods: {
        setNick(e) {
            e.preventDefault();
            if (!this.nickname) {
                alert('애칭을 입력해주세요');
                return;
            } else {
                let msg = this.list;

                for(let i=0; i<msg.length; i++){
                  for(let j=0; j<msg[i].talk.length; j++) {
                      let text = msg[i].talk[j].text;
                      if (text) {
                          text = text.replace("@@", this.nickname);
                          msg[i].talk[j].text = text;
                      }
                  }
                }
                
                let nick = document.querySelector('input[name="nick"]');
                let btn = document.querySelector('.send');
                nick.disabled = true;
                btn.disabled = true;
            }
        },
        setImg(value) {
            let profile = value.concat('.jpg');
            this.profile = profile;
        },
        inputNick(e) {
            this.nickname = e.target.value;
        }
    },
    mounted(){
        axios.get("./db.json")
            .then(response => (this.list = response.data));
    }
});

app.mount('#app');
