let create = document.getElementById('create');
let upper = document.getElementById('upper_h2');

$('.front_p').hide();
$('.star').hide();
$('.bottom_bar').hide();
$('.under_about').hide();
$('.bottom_bar_contact').hide();
$('.e_t').hide();
$('.under_about_2').hide();


$(create).hide();
$(create).slideDown(900, function() {
    $('.front_p').slideDown(900);
    $('.star').slideDown(900);
    $('.bottom_bar').slideDown(900);
    $('.under_about').slideDown(900);
    $('.bottom_bar_contact').slideDown(900);
    $('.e_t').slideDown(900);
    $('.under_about_2').slideDown(900);
});


$(upper).hide();
$(upper).slideDown(900);
