import {init, firstLoad, next, prev} from "./gallery.js";

$(function () {
    init();
    $('#load').on('click', function () {
        firstLoad();
    });

    $('#next').on('click', function(){
        next();
    });

    $('#prev').on('click', function(){
        prev();
    });

    $('#nextLightbox').on('click', function(){
        nextLightbox();
    });

    $('#prevLoghtbox').on('click', function(){
        prevLightbox();
    });

    $('.closeBtn').on('click', function() {
        $('#lightbox').hide();
    });
});

