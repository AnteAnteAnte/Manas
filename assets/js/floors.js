$(document).ready(function(e){
    $('img[usemap]').maphilight( {
        fillColor: 'FBF5EB',
        fillOpacity: .7,
        strokeColor: 'B2BEB5',
        strokeOpacity: 1,
        strokeWidth: 1
    });

})
function switchContent(obj) {
        obj = (!obj) ? 'sub1' : obj;
        var contentDivs = document.getElementsByTagName('div');
        for (i=0; i<contentDivs.length; i++) {
            if (contentDivs[i].id && contentDivs[i].id.indexOf('sub') !== -1) {
                contentDivs[i].className = 'hide';
            }
        }
        document.getElementById(obj).className = '';
    }
    function checkTab() {
        $('area').each(function() {
            $(this).click(function() {
                tab = $(this).attr('href').split('#');
                console.log(tab)
                switchContent(tab[1]);
                $('.current').attr('class','');
                $(this).attr('class','current');
            });
        });
    }
    function checkLink() {
        $('a').each(function() {
            $(this).click(function() {
                tab = $(this).attr('href').split('#');
                switchContent(tab[1]);
                $('.current').attr('class','');
                $(this).attr('class','current');
            });
        });
    }
    window.onload = function() {
        checkTab();
        checkLink();
    };
