





$('#timer-sp1').countdown('2026/01/25').on('update.countdown', function (event) {
    var $this = $(this).html(event.strftime(''
        + '<div class="box">%D ' + ' <span>Ngày</span>' + '</div> '
        + '<div class="box">%H ' + ' <span>Giờ</span>' + '</div>'
        + '<div class="box">%M ' + ' <span>Phút</span>' + '</div>'
        + '<div class="box">%S ' + ' <span>Giây</span>' + '</div>'));
});

// phai co khoang trang sau  ngay gio va khoang trang trước span mới tac đọng tơi sapn duoc
$('#timer-sp2').countdown('2025/10/22').on('update.countdown', function (event) {
    var $this = $(this).html(event.strftime(''
        + '<div class="box">%D ' + ' <span>Ngày</span>' + '</div> '
        + '<div class="box">%H ' + ' <span>Giờ</span>' + '</div>'
        + '<div class="box">%M ' + ' <span>Phút</span>' + '</div>'
        + '<div class="box">%S ' + ' <span>Giây</span>' + '</div>'));
});



$('#timer-sp3').countdown('2026/01/21').on('update.countdown', function (event) {
    var $this = $(this).html(event.strftime(''
        + '<div class="box">%D ' + ' <span>Ngày</span>' + '</div> '
        + '<div class="box">%H ' + ' <span>Giờ</span>' + '</div>'
        + '<div class="box">%M ' + ' <span>Phút</span>' + '</div>'
        + '<div class="box">%S ' + ' <span>Giây</span>' + '</div>'));
});


$('#timer-sp4').countdown('2026/01/10').on('update.countdown', function (event) {
    var $this = $(this).html(event.strftime(''
        + '<div class="box">%D ' + ' <span>Ngày</span>' + '</div> '
        + '<div class="box">%H ' + ' <span>Giờ</span>' + '</div>'
        + '<div class="box">%M ' + ' <span>Phút</span>' + '</div>'
        + '<div class="box">%S ' + ' <span>Giây</span>' + '</div>'));
});


$('#timer-sp5').countdown('2026/01/20').on('update.countdown', function (event) {
    var $this = $(this).html(event.strftime(''
        + '<div class="box">%D ' + ' <span>Ngày</span>' + '</div> '
        + '<div class="box">%H ' + ' <span>Giờ</span>' + '</div>'
        + '<div class="box">%M ' + ' <span>Phút</span>' + '</div>'
        + '<div class="box">%S ' + ' <span>Giây</span>' + '</div>'));
});


$('#timer-sp6').countdown('2026/01/30').on('update.countdown', function (event) {
    var $this = $(this).html(event.strftime(''
        + '<div class="box">%D ' + ' <span>Ngày</span>' + '</div> '
        + '<div class="box">%H ' + ' <span>Giờ</span>' + '</div>'
        + '<div class="box">%M ' + ' <span>Phút</span>' + '</div>'
        + '<div class="box">%S ' + ' <span>Giây</span>' + '</div>'));
});


// chay thanh bar duoi san pham
$('#bar-sp1').LineProgressbar({
percentage:90,
radius: '5px',
height: '10px',
});
$('#bar-sp2').LineProgressbar({
percentage:80,
radius: '5px',
height: '10px',
});

$('#bar-sp3').LineProgressbar({
percentage:60,
radius: '5px',
height: '10px',
});

$('#bar-sp4').LineProgressbar({
percentage:50,
radius: '5px',
height: '10px',
});

$('#bar-sp5').LineProgressbar({
percentage:40,
radius: '5px',
height: '10px',
});

$('#bar-sp6').LineProgressbar({
percentage:40,
radius: '5px',
height: '10px',
});

$('#bar-sp7').LineProgressbar({
percentage:50,
radius: '5px',
height: '10px',
});

$('#bar-sp8').LineProgressbar({
percentage:70,
radius: '5px',
height: '10px',
});
$('#bar-sp9').LineProgressbar({
percentage:50,
radius: '5px',
height: '10px',
});
$('#bar-sp10').LineProgressbar({
percentage:30,
radius: '5px',
height: '10px',
});



