let str = decodeURIComponent(window.location.search);//  ?jump=count
let s_str = str.substr(1);//  jump=count
const arr = s_str.split('=')[1]; // count


$.get('../json/' + arr + '.json' , function(res){
    console.log(res);
        var string = '';
        res.forEach(function(item){
            // var img = item.img.split(',')[0];
            string +=
            `<li>
                <a href="good.html?jump=count&${item.id}" id="${item.id}">
                    <img src="../images/list/${item.img}.png" alt="">
                    <h4>${item.good_name}</h4>
                    <p>${item.introduce}</p>
                    <div class="big"><div class="small"></div></div>
                    <span>${item.pirce}</span>
                </a>
            </li>
            `
        })
        $(".content-ul").html(string);
})