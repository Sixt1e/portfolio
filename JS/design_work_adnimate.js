let create = document.getElementById('create');
let upper = document.getElementById('upper_h2');

$('.works').hide();
$('.fourth_work').hide();
$('.bottom_bar').hide();
$('.fifth_work').hide();

$(create).hide();
$(create).slideDown(900, function() {
    $('.works').slideDown(900, function(){
    $('.fourth_work').slideDown(900);
    $('.fifth_work').slideDown(900);
    $('.bottom_bar').slideDown(900);
    });
});