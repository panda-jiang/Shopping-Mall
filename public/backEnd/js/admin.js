// 该文件的功能是用来写首页的js交互的
//进度条显示功能
//不显示转圈的效果
NProgress.configure({
    showSpinner: false
})

//在ajax开始请求的时候，把进度条显示出来
$(window).ajaxStart(function(){
    NProgress.start()
})
//在ajax结束请求的时候， 把进度条完成
$(window).ajaxStart(function(){
    NProgress.done()
})


//二级菜单的显示和隐藏
$('#subMenu').on('click', function() {
    $(this).siblings('.child').slideToggle(700)
})

//侧边栏的显示和隐藏
$('.square').on('click',function() {
    $('.ad_aside').toggle()
    $('.ad_section').toggleClass('neiron');
})

//点击退出管理系统
$('.btn-primary').on('click', function() {
    window.location.href = 'login.html'
})