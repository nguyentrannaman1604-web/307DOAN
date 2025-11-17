// cách viết scripts su dung toogle đóng mở một thẻ
$('#bt-nav-menu').click(function () {
   $('#main-nav').toggle('slide')
 })

 $('#bt-main-nav-close').click(function () {
     $('#main-nav').toggle('slide')
})

 $('#bt-nav-menu').click(function () {
   $('#menu-iphone').toggle('slide')
})

 $('#bt-main-nav-close2').click(function () {
    $('#menu-iphone').toggle('slide')
})


$('#filter-nut').click(function () {
    $('#sidebar').toggle('slide')
})

$('#bt-sidebar-close').click(function () {
    $('#sidebar').toggle('slide')
})


// để màn hình bung lớn không bị mất thanh mainn-nav
$(window).resize(function () {
    if ($(window).width() >= 992) {
        $('#main-nav').css('display', 'block');

    } else {
        $('#main-nav').css('display', 'none');
    }
}
)

// Để kiểm tra gọi alert trước
// $('#bt-search').click(function () {
//     alert()
// })


// owlCarousel cho banner2
$(document).ready(function () {

    $('#banner2',).owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],

        responsive: {
            0: {
                items: 1,
                // chạy tự động
                autoplay: true,
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }

    })
});

$(document).ready(function () {

    $('#sanpham',).owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],

        responsive: {
            0: {
                items: 1,
                // chạy tự động
                autoplay: true,
            },
            600: {
                items: 2
            },
            1200: {
                items: 4
            }
        }

    })
});

$(document).ready(function () {

    $('#sanpham2',).owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],

        responsive: {
            0: {
                items: 1,
                // chạy tự động
                autoplay: true,
            },
            600: {
                items: 2
            },
            1200: {
                items: 4
            }
        }

    })
});

$(document).ready(function () {

    $('#khachhang').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],

        responsive: {
            0: {
                items: 1,
                // chạy tự động
                autoplay: true,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }

    })
});


$(document).ready(function () {

    $('#sanpham3',).owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],

        responsive: {
            0: {
                items: 1,
                // chạy tự động
                autoplay: true,
            },
            600: {
                items: 2
            },
            1200: {
                items: 4
            }
        }

    })
});


$(document).ready(function () {

    $('#sanpham4',).owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],

        responsive: {
            0: {
                items: 1,
                // chạy tự động
                autoplay: true,
            },
            600: {
                items: 2
            },
            1200: {
                items: 4
            }
        }

    })
});


$(document).ready(function () {
    $('#tintuc',).owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],

        responsive: {
            0: {
                items: 1,
                // chạy tự động
                autoplay: true,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }

    })
});
// script cho video nut play
let vid = document.getElementById("myVideo1");

function playVid1() {
    vid.play();

}
let vid2 = document.getElementById("myVideo2");

function playVid2() {
    vid2.play();
}


//  CHO NÚT TANG GIAM GIO HANG
$('#minus1').click (function(){
    var sl1=$('#soluong1').val();
    sl1=parseInt(sl1,10);
    if(sl1<=1) {
        sl1=1;
    }
    else {
        sl1--;
    }
    $('#soluong1').val(sl1);
})

$('#plus1').click (function(){
     var sl1=$('#soluong1').val();
    sl1=parseInt(sl1,10);
    sl1++;
    $('#soluong1').val(sl1);
})

$('#minus2').click (function(){
    var sl1=$('#soluong2').val();
    sl1=parseInt(sl1,10);
    if(sl1<=1) {
        sl1=1;
    }
    else {
        sl1--;
    }
    $('#soluong2').val(sl1);
})

$('#plus2').click (function(){
     var sl1=$('#soluong2').val();
    sl1=parseInt(sl1,10);
    sl1++;
    $('#soluong2').val(sl1);
})

// JJJJJJJJJJJJJ

$('#minus3').click (function(){
    var sl1=$('#soluong3').val();
    sl1=parseInt(sl1,10);
    if(sl1<=1) {
        sl1=1;
    }
    else {
        sl1--;
    }
    $('#soluong3').val(sl1);
})

$('#plus3').click (function(){
     var sl1=$('#soluong3').val();
    sl1=parseInt(sl1,10);
    sl1++;
    $('#soluong3').val(sl1);
})
/////////////
$('#minus4').click (function(){
    var sl1=$('#soluong4').val();
    sl1=parseInt(sl1,10);
    if(sl1<=1) {
        sl1=1;
    }
    else {
        sl1--;
    }
    $('#soluong4').val(sl1);
})

$('#plus4').click (function(){
     var sl1=$('#soluong4').val();
    sl1=parseInt(sl1,10);
    sl1++;
    $('#soluong4').val(sl1);
})

///////////////////////
