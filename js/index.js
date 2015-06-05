/**
 * Created by manggo on 2015/3/12.
 */
$(".box").hover(
    function () {
        $(this).find('.icon').addClass("animated fadeInDown");
        $(this).find('p').addClass("animated fadeInUp");
    },
    function () {
        $(this).find('.icon').removeClass("animated fadeInDown");
        $(this).find('p').removeClass("animated fadeInUp");
    }
);