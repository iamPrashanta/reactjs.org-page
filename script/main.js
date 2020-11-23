$('.sidenav ul').click(function () {
    if ($(this).hasClass('active-content')) {
        if ($(this).sibilings().hasClass('active-content')) {
            //
        } else {
            $(this).removeClass('active-content');
        }
    } else {
        $('.sidenav ul').removeClass('active-content');
        $(this).addClass('active-content');
    }
});
$('.sidenav ul li a').click(function () {
    if ($(this).hasClass('active-item')) {
        if ($(this).sibilings().hasClass('active-item')) {
            //
        } else {
            $(this).removeClass('active-item');
        }
    } else {
        $('.sidenav ul li a').removeClass('active-item');
        $(this).addClass('active-item');
    }
});

$('.fa-bars').click(function () {
    alert('I am perfectly working (code was missing)');
})

$('.links svg').click(function () {
    window.location.href = "http://google.com";
})
$('.links .fa-github').click(function () {
    window.location.href = "https://github.com/iamPrashanta";
})
$('.header .logo img').click(function () {
    window.location.href = "../index.html";
})