
(function(a){if(typeof a.fn.hoverIntent!=="function"){throw"You need to include jquery.hoverintent.min.js to use jSquares."}a.fn.jsquares=a.fn.jSquares=function(b){function p(a){for(var b,c,d=a.length;d;b=parseInt(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a}function o(a){var b=0;var c=0;do{var d=a.position();b+=d.left;c+=d.top;a=a.offsetParent()}while(a[0].tagName.toLowerCase()!=="body");return{x:b,y:c}}function n(f){var f=p(f);e=setInterval(function(){if(d==f.length){clearInterval(e);return false}var g=a(b.image+":eq("+f[d]+")",c);var h=g.height();g.fadeIn(b.fade_speed);d++},b.shuffle_in_speed)}function m(c){var d=o(a(c));var e=d.x-b.caption_overlay_spacing;var f=d.y-b.caption_overlay_spacing;var g=b.caption_height+b.caption_overlay_spacing*2;var h=b.caption_width+b.caption_overlay_spacing*2;var j=e+h+b.caption_overlay_spacing*2;if(j>=i){var k=a(c).outerWidth();e=e-(b.caption_width+b.caption_overlay_spacing*2)+k}return{x:e,y:f,width:h,height:g}}function l(d){a("."+b._overlay_selector_class).remove();var e=a(b.image+":eq("+d+")",c),f=m(e),g=e.find(".js-overlay-caption-content").html()||"",h=b.caption_slide_down?{display:"none"}:{};if(g){var i=g,j=e.find("img"),l=j.parent().attr("href")||"",n=l!=""?'<a href="'+l+'">':"",o=l!=""?"</a>":"";g=n+'<img src="'+j.attr("src")+'" class="js-overlay-image" />'+o;g+='<div class="js-overlay-html">'+i+'</div><div style="clear:both"></div>'}var h=a.extend({top:f.y,left:f.x,width:f.width,height:f.height},h);a('<div id="js-overlay-id-'+d+'">'+g+"</div>").css(h).addClass(b._overlay_selector_class).appendTo("body").bind("mouseleave",function(){k("out",b.fade_start);a("#js-overlay-id-"+d).remove()});if(b.caption_slide_down){a("#js-overlay-id-"+d).slideDown(b.caption_slidedown_speed)}}function k(c,d,e){var f=c=="in"?g.not(":eq("+e+")").find(b._fade_selectors_on_hover):h;b.fade_on_hover?a(f).stop(true,false).fadeTo(b.fade_speed,d):a(f).css("opacity",d)}function j(a,c,d){l(c);k("in",b.fade_to,c)}var c=this,d=0,e=0,f={image:".js-image",caption:".js-small-caption",caption_overlay_spacing:12,caption_width:400,caption_height:130,fade_to:.3,fade_start:1,fade_speed:"fast",shuffle_in:true,shuffle_in_speed:130,fade_on_hover:true,caption_slide_down:true,caption_slidedown_speed:"fast",_fade_selectors_on_hover:"img, .js-small-caption span",_overlay_selector_class:"js-caption-overlay"},b=a.extend(f,b),g=a(b.image,c),h=g.find(b._fade_selectors_on_hover),i=a(window).width();a(window).resize(function(){i=a(window).width()});return this.each(function(){var c=[];g.each(function(b){a(this).hide();c.push(b)});b.shuffle_in?n(c):g.show();g.each(function(b){a(this).hoverIntent(function(a){j(this,b,a)},function(a){})})})}})(jQuery);