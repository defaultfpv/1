$(function(){

    function offScroll()
    {
        $("html,body").css('overflow','hidden');
    }

    function onScroll()
    {
        $("html,body").css('overflow','visible');
    }

    var openForm = $('#openform');
    
    // кнопка скрытого меню
    $('#catalog, #catalog1').click(function(){
        openForm.fadeIn(300, offScroll);
    });

    $('#openform').click(function(event){
        if(event.target == this)
        {
            $(this).fadeOut(300, onScroll);
        }
    });

    // кнопка скрытого меню

    $('#search').click(function(){
        $('#openform2').fadeIn(300, offScroll);
    });

    $('#openform2').click(function(event){
        if(event.target == this)
        {
            $(this).fadeOut(300, onScroll);
        }
    });
    
});