function getClass(className) { //className指class的值
    var tagname = document.getElementsByTagName('*');  //找到指定元素
    var tagnameAll = [];     //先給予空值，找到該值後賦予上去
    for (var i = 0; i < tagname.length; i++) {     //回圈
        if (tagname[i].className.indexOf(className)>=0){     //找到該元素並給予class名稱
            tagnameAll[tagnameAll.length] = tagname[i];
        }
    }
    return tagnameAll;
}



window.onload=function(){//载入事件
var btn=getClass('tab_btn');//获取按钮数组
var div=getClass('tab_div');//获取div数组
for(i=0;i<btn.length;i++){
    btn[i].onclick=function(){//按钮点击事件
        var index=(this.getAttribute('index')-0);//获取是第几个按钮按下
        // if(btn[index].className.indexOf('curr_btn')>=0) return;//如果按下的按鈕為當時的按鈕 則無反應
        for(i=0;i<btn.length;i++){
            if(index==i){
                btn[i].className='tab_btn curr_btn';
                div[i].className='tab_div curr_div';
            }else{
                btn[i].className='tab_btn';
                div[i].className='tab_div';
            }
        }
    }
}
};