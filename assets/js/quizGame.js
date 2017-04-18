//object questions = []

//var score = 0;
//var total = 5;
//var points =1;
//var highest = total * points;

//Initializer
//
    //set correct answers
    sessionStorage.setItem('a1','a');
    sessionStorage.setItem('a2','c');
    sessionStorage.setItem('a3','c');
    sessionStorage.setItem('a4','c');
    sessionStorage.setItem('a5','d');
//}


$(document).ready(function() {
    //hide questions on load
    $('.formBody').hide();

    //show first question
    
    $('#start').click(function() {
        $('#q1').show(500);
        $('#start').fadeOut(500);
        
    });
    
        $('#q1 #submit').click(function() {
        $('.formBody').hide(500);
         process('q1');
        $('#q2').fadeIn(500);
        return false;
    });
    
    $('#q2 #submit').click(function() {
        $('.formBody').hide(500);
        process('q2');
        $('#q3').fadeIn(500);
        return false;
    });

    $('#q3 #submit').click(function() {
        $('.formBody').hide(500);
         process('q3');
        $('#q4').fadeIn(500);
        return false;
    });

    $('#q4 #submit').click(function() {
        $('.formBody').hide(500);
         process('q4');
        $('#q5').fadeIn(500);
        return false;
    });

    $('#q5 #submit').click(function() {

        $('.formBody').hide(500);
         process('q5');
        $('#results').fadeIn(500);
        return false;

    });

//});

function process(q) {
if(q==='q1') {
    var submitted = $('input[name=q1]:checked').val();
    if(submitted ===sessionStorage.a1) {
       score++;  
    }
}

if(q==='q2') {
    var submitted = $('input[name=q2]:checked').val();
    if(submitted ===sessionStorage.a2) {
       score++;  
    }
}

if(q==='q3') {
    var submitted = $('input[name=q3]:checked').val();
    if(submitted ===sessionStorage.a3) {
       score++;  
    }
}

if(q==='q4') {
    var submitted = $('input[name=q4]:checked').val();
    if(submitted ===sessionStorage.a4) {
       score++;  
    }
}

if(q==='q5') {
    var submitted = $('input[name=q5]:checked').val();
    if(submitted ===sessionStorage.a5) {
       score++;  
    }
    $('#results').html('<h3>Your final score is' + score + ' out of 5</h3>');
}

return false;

}

window.addEventListener('load', init, false);

});

