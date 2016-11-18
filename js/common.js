$(document).ready(function() {

	// Модальное окно Формы
	$(".modal-form").magnificPopup();

	// Gellery
	$(".gallery").each(function() {
		$(this).magnificPopup({
			delegate: "a",
			type: "image",
			gallery:{
				enabled: true,
			},
		});
	});

	$('#carousel').flexslider({
		animation: "slide",
		animationspeed: 1000,
	});

	$("#phone").mask("+7 (999) 999-9999");
	$("#phone2").mask("+7 (999) 999-9999");
	$("#phone3").mask("+7 (999) 999-9999");
	$("#phone4").mask("+7 (999) 999-9999");

	/*Карта*/


ymaps.ready(init);
  function init () {
    var myMap = new ymaps.Map('map', {
        center:[55.7285889, 37.6691786],
        zoom: 14
    });

    myMap.balloon.open([55.7285889, 37.6691786], "", {
        closeButton: false
    });
  }
});


  
 (function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return jQuery(this).delay(1000).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                jQuery(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };

});

// function price_format(o) {
//     return Number(o).toFixed(1);
// }

// function recalc() { 
//     document.getElementById('price').innerHTML = price_format((parseFloat(document.getElementById('a').value) * parseFloat(document.getElementById('b').value)) / 100);
// }

// recalc();


$(document).ready(function(){

    var form_calc = document.getElementById('form_calc'),
        rezultat = document.getElementById('rezultat'),
        percentage = document.getElementById('percentage'),
        elementA = document.getElementById('a'),
        elementB = document.getElementById('b'),
        elementC = document.getElementById('c'),
        elementD = document.getElementById('d')
        elementV = document.getElementById('v');

    rezultat.innerHTML = "0";
    percentage.innerHTML = "0";
    elementA.value = "";
    elementB.value = "";
    elementC.value = "";
    elementD.value = "";

    form_calc.onsubmit = function() {
        return false;
    };

    function calcRezult () {

        var value_A = parseFloat(elementA.value) || 0,
            value_B = parseFloat(elementB.value) || 0,
            value_C = parseFloat(elementC.value) || 0,
            value_D = parseFloat(elementD.value) || 0;

        rezultat.innerHTML = value_A * value_B * value_C * value_D / parseFloat(elementV.value);
    }

    function calcPercentage () {
        var value_A = parseFloat(elementA.value) || 0,
            value_B = parseFloat(elementB.value) || 0;

         percentage.innerHTML = ( value_A * value_B ) / 100;
    }

    form_calc.oninput = function () {
        
        calcRezult ();

        calcPercentage ();

    };

});

var form_calc = document.getElementById('form_calc');

form_calc.onsubmit = function() {
    return false;
};

form_calc.oninput = function () {
    
    document.getElementById('rezultat').innerHTML = parseFloat(document.getElementById('a').value) * parseFloat(document.getElementById('b').value) * parseFloat(document.getElementById('c').value) * parseFloat(document.getElementById('d').value) / parseFloat(document.getElementById('v').value);

};