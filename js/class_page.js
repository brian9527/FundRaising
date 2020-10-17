let opt = document.querySelector('#option_id');
// let span = document.querySelector('.select_1');
let selOpt = [
    {
        option:'潛力集資'
    },
    {
        option:'熱門集資'
    },
    {
        option:'即將推出'
    },
    {
        option:'專案金額'
    },
    {
        option:'最後衝刺'
    },
    {
        option:'最新啓動'
    }
];
var len = selOpt.length;
var change = (e) => {
    let select = e.target.value;
    let str = '';
    for(let i = 0; i < len; i++){
        if(select == selOpt[i].option){
            str += selOpt[i].option;
        }
    }
    document.querySelector("#the_text").textContent = str;
    // $("#the_text").html(str);
}
opt.addEventListener('click',change,false);