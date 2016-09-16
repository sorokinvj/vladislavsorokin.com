jQuery(".el").ready(function(){
    var counter = 0;
    jQuery.Color.hook( "fill stroke" );

    // function hue_trans_fill(element,hue_value,timeout) {
    //
    //   jQuery(element).animate({
    //     fill: $.Color($(element).css("fill")).hue(hue_value)
    //   }, timeout).animate({
    //     fill: $.Color($(element).css("fill")).hue(hue_value+60)
    //   },timeout).animate({
    //     fill: $.Color($(element).css("fill")).hue(hue_value+120)
    //   }, timeout).animate({
    //     fill: $.Color($(element).css("fill")).hue(hue_value+180)
    //   }, timeout).animate({
    //     fill: $.Color($(element).css("fill")).hue(hue_value+240)
    //   }, timeout).animate({
    //     fill: $.Color($(element).css("fill")).hue(hue_value+300)
    //   }, timeout, function(){
    //                 hue_trans_fill(element, i+360, timeout);
    //               });
    // }
    function hue_trans_fill(element,hue_value,timeout) {

      jQuery(element).animate({
        fill: jQuery.Color({ hue: hue_value})
      }, timeout).animate({
        fill: jQuery.Color({ hue: hue_value+60})
      },timeout).animate({
        fill: jQuery.Color({ hue: hue_value+120})
      }, timeout).animate({
        fill: jQuery.Color({ hue: hue_value+180})
      }, timeout).animate({
        fill: jQuery.Color({ hue: hue_value+240})
      }, timeout).animate({
        fill: jQuery.Color({ hue: hue_value+300})
      }, timeout, function(){
                    hue_trans_fill(element, hue_value+360, timeout);
                  });
    }

    function hue_trans_back(element,hue_value,timeout) {

      jQuery(element).animate({
        backgroundColor: jQuery.Color({ hue: hue_value})
      }, timeout).animate({
        backgroundColor: jQuery.Color({ hue: hue_value+60})
      },timeout).animate({
        backgroundColor: jQuery.Color({ hue: hue_value+120})
      }, timeout).animate({
        backgroundColor: jQuery.Color({ hue: hue_value+180})
      }, timeout).animate({
        backgroundColor: jQuery.Color({ hue: hue_value+240})
      }, timeout).animate({
        backgroundColor: jQuery.Color({ hue: hue_value+300})
      }, timeout, function(){
                    hue_trans_back(element, i+360, timeout);
                  });
    }


      hue_trans_fill(".el", 60, 50000);
      hue_trans_back("body", 60, 50000);


    // jQuery(".el").animate({
    //   fill: jQuery.Color({ hue: 120});
    // }, 10000, function(){
    //   jQuery(".el").animate({
    //     fill: jQuery.Color({ hue: 240})
    //   }, 10000);
    // });
    // jQuery("body").animate({
    //   backgroundColor: jQuery.Color({ hue: 120})
    // }, 10000);
});
