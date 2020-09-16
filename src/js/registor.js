$(function(){
    // 获取页面元素
    let $uname = $('.uname');
    let $upwd = $('.upwd');
    let $err_user = $('.err_user');
    let $err_pwd = $('.err_pwd');
    let $registor = $('.registor');
    let re_phone = /^1(3[0-9]|4[5,7]|5[0,1,2,3,4,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
    let re_emali = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
    // 给用户名添加得焦事件
    $uname.focus(function(){
        $('.uname-div').css('opacity',1)
    })
    // 给密码添加得焦事件
    $upwd.focus(function(){
        $('.password-div').css('opacity',1)
    })
    // 给用户名添加失焦事件
    $uname.blur(function(){
        // 获取用户名val
        let $uname_val = $uname.val(); 
        if(!re_phone.test($uname_val) && !re_emali.test($uname_val)){
            $err_user.text('手机号/邮箱格式错误');
            $err_user.css('opacity','1');
            $('.uname-div').css('border-color','#d16d62')
        }else{
            $err_user.text(' ');
            $err_user.css('opacity','0');
            $('.uname-div').css('border-color','#dadada')
        }
    })
    // 给密码添加
    $upwd.blur(function(){
        // 获取密码val
        let $upwd_val = $upwd.val();
        if($upwd_val === ''){
            $err_pwd.text('密码不能为空');
            $err_pwd.css('opacity','1');
            $('.password-div').css('border-color','#d16d62')
        }else{
            $err_pwd.text(' ');
            $err_pwd.css('opacity','0');
            $('.password-div').css('border-color','#dadada')
        }
    })
    // 给注册按钮添加点击事件
    $registor.click(function(){
        let $uname_val = $uname.val();
        let $upwd_val = $upwd.val();
        // 检查用户名是否为空
        if(!$uname_val){
            $err_user.text('用户名不能为空');
            $err_user.css('opacity','1');
            $('.uname-div').css('border-color','#d16d62')
            return;
        }
        // 获取cookie
        let cookie_str = $.cookie('users') ? $.cookie('users') : '';
        // 将字符串转为对象
        let cookie_obj = $toObj(cookie_str);
        // 判断用户名是否存在cook中
        if($uname_val in cookie_obj){
            $err_user.text('用户名已存在');
            $err_user.css('opacity','1');
            $('.uname-div').css('border-color','#d16d62')
            return;
        }else{
            $err_user.text(' ');
            $err_user.css('opacity','0');
            $('.uname-div').css('border-color','#dadada')
        }
        // 密码存入对象
        cookie_obj[$uname_val] = $upwd_val;
        // 存入cookie
        $.cookie('users',JSON.stringify(cookie_obj),{expires : 20,path : '/'});
        alert('注册成功');
        location.href = '../pages/login.html'
        $uname_val = ''
        $upwd_val = ''
    })
    $('.log-a').click(function(){
        location.href = '../pages/login.html';
    })
})