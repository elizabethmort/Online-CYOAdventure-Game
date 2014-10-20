/**
 * Created by elizabeth on 9/28/14.
 */
/**
 * Created by elizabeth on 9/26/14.
 */

function gotoPage(a) {
    $('.page').hide();
    $('#page' + a).fadeIn();
}

$(function () {
    gotoPage(1);
});
