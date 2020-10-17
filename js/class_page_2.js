let opt2 = document.querySelector('#option_id_2');
// let span2 = document.querySelector('.select_2');
let selOpt2 = [
    {
        option:'科技'
    },
    {
        option:'文藝'
    },
    {
        option:'生活'
    },
    {
        option:'旅遊'
    },
    {
        option:'遊戲'
    },
    {
        option:'計畫'
    }
];
let len2 = selOpt2.length;
var change = (e) => {
    let select2 = e.target.value;
    let str2 = '';
    for(let i = 0; i < len2; i++){
        if(select2 == selOpt2[i].option){
            str2 += selOpt2[i].option;
        }
    }
    document.querySelector("#the_text_2").innerHTML = str2;
    // span2.textContent = str2;
}
opt2.addEventListener('click',change,false);