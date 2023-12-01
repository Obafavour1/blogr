$(document).ready(function(){

    $('.dropdown').hide();
    $('.product-p').click(function(){
        $('.dropdown-product').fadeToggle(200)
        $('.dropdown-company').hide()
        $('.dropdown-connect').hide()
    })

    $('.company').click(function(){
        $('.dropdown-product').hide()
        $('.dropdown-company').fadeToggle(200)
        $('.dropdown-connect').hide()
    })

    $('.connect').click(function(){
        $('.dropdown-product').hide()
        $('.dropdown-company').hide()
        $('.dropdown-connect').fadeToggle(200)
    })

    // $('.closemenu').hide()
    // $('.openmenu').hide()

    $('.closemenu').click(function(){
        $('.openmenu').show()
        $('.closemenu').hide()
        $('.menu').removeClass('active');
    });

    $('.openmenu').click(function(){
        $('.openmenu').hide()
        $('.closemenu').show()
        $('.menu').addClass('active');
    });

    // $('.product').click(function(){
    //     $(this).hide();
    // })

    // $(".company").click(function(){
    //     $('.dropdown-company').hide();
    // })


    // loader delay
    const observar = new IntersectionObserver((enteries) => {
        enteries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add('show')
            }else{
                entry.target.classList.remove('show')
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observar.observe(el));

});