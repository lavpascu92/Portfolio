$(function(){
    const WORDS = ["a front-end developer.", "a learner.", "tech curious."];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = '';
    let letter_typing = '';

    // IIFE type function that creates the typing effect
    (function typing()
    {

    if(wordIndex === WORDS.length)
    {
        wordIndex = 0;
    }
    currentWord = WORDS[wordIndex];
    letter_typing = currentWord.slice(0, ++letterIndex);
    $("#typing").text(letter_typing);
    if(letterIndex === currentWord.length)
    {
        letterIndex = 0;
        wordIndex++;
    }
    setTimeout(typing, 300);
    }());


    //Toggle navbar menu on small devices < 950px
    $("#navbar").on("click", function()
    {
        $("#toggle_navbar").slideToggle("toggle");
    })
    
    // Scroll up arrow
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#up_arrow').fadeIn();
        } else {
            $('#up_arrow').fadeOut();
        }
    });
    $("#up_arrow").click(function() {
        $("html, body").animate({scrollTop: 0}, 400);
     });

});