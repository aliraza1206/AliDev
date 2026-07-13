
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);
// Initialize EmailJS
emailjs.init({
    publicKey: "_LhY9F5vD0YuY60GI",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_bmi2em6",
        "template_0k5qa6d",
        this
    ).then(function () {
        alert("Message sent successfully!");
        form.reset();
    }).catch(function (error) {
        alert("Failed to send message.");
        console.log(error);
    });
});

