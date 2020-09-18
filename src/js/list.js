let str = decodeURIComponent(window.location.search);//  ?jump=count
let s_str = str.substr(1);//  jump=count
const arr = s_str.split('=')[1]; // count

$.get('' , function(res){
    console.log(res);
        var string = '';
        res.forEach(function(item){
            var img = item.img.split(',')[0];
            string +=
            `
                <a href="#">
                    <img src="../images/list/${img}.png" alt="">
                    <h4>${good-name}</h4>
                    <p>${introduce}</p>
                    <div class="big"><div class="small"></div></div>
                    <span>${pirce}</span>
                </a>
            </li>
            `
        })
        $(".content").html(string);
})