var str = decodeURIComponent(window.location.search);
var arr = str.substr(6,5);
var id = str.substr(12,3);
$.get('../json/' + arr + '.json',function(res){
    console.log(res);
        var string = '';
    
    res.forEach(function(item){
         
        if(item.id  == id){
            var img = item.img.split(',');
            string += 
        `
        <div class="good-img">
        <img src="../images/good/${item.img}.png" alt="">
    </div>
    <div class="good-right">
        <h3>${item.good_name}</h3>
        <p class="synopsis">${item.introduce}</p>
        <div class="good-color">
            <p>颜色选择</p>
            <div class="big"><div class="small"></div></div>
            ${item.color}
        </div>
        <div class="good-capacity">
            <p class="p1">容量选择</p>
            <p class="p2">
                8G + 128GB
            </p>
        </div>
        <p class="explain">服务说明<span>*满99元包邮</span></p>
    </div>

        `


        }

        
    })

    $(".good-content").html(string);
})