var rotationId = null;	
$(function() {

   /* sortable */
    /*$('#sortable').sortable({
       items: 'tr',
       update: function(event,ui){
          $(this).find('input[name=ord]').each(function(index){
             $(this).attr('value',index+1);
          });
          if($('#sortable').parents('form').find('#sortable-save').length===0){
             $('#sortable').parents('table').after('<div class="button"><button id="sortable-save" class="btn btn-save" type="submit">Zapisz kolejność</button></div>');
          }
       }
    });
    $('#sortable').disableSelection();*/
	/* end sortable */

	// --- datepicker pl ------------------------------------
		$.datepicker.regional['pl'] = {
			closeText: 'Zamknij',
			prevText: '&laquo; Poprzedni',
			nextText: 'Następny &raquo;',
			currentText: 'Dziś',
			monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
			monthNamesShort: ['Sty','Lu','Mar','Kw','Maj','Cze','Lip','Sie','Wrz','Pa','Lis','Gru'],
			dayNames: ['Niedziela','Poniedzialek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
			dayNamesShort: ['Nie','Pn','Wt','Śr','Czw','Pt','So'],
			dayNamesMin: ['N','Pn','Wt','Śr','Cz','Pt','So'],
			dateFormat: 'yy-mm-dd', firstDay: 1,
			isRTL: false};
		$.datepicker.setDefaults($.datepicker.regional['pl']);
	// --- end datepicker pl ------------------------------------

	if (locale == 'pl') {
	   $.datepicker.setDefaults($.datepicker.regional['pl']);
	} else {
	   $.datepicker.setDefaults($.datepicker.regional['']);
	}

		$(".datepicker").datepicker({
			showOn: 'button',
			buttonImage: '/img/ico.calculator.gif',
			buttonImageOnly: true,
			duration: 'fast' ,
			showAnim: 'fadeIn',
			showButtonPanel: true,
			showOn: 'both'
		});


	$('.delete').click(function(){
	  var answer = 'Czy na pewno usunać?';
	  var title = $(this).attr('title');
		if (title != '' &&  title != ' ') {
			if (confirm(title)) {
				return answerTitle;
			} else {
				return false;
			}
		} else {
			if (confirm(answer)){
				return answer;
			} else {
				return false;
			}
		}
	});

/* rotation ------------------------------- */
	var idBoxRotation = $("#rotation ul.tabs-nav li.rotate").length;
	var idBoxRotation1 = idBoxRotation + 1;
	var rotateTime = 4000;
	var rotateTimeInterval = 8000;
	if (idBoxRotation > 1) {
		function rotateRotation() {
			var current = parseInt($('#rotation ul.tabs-nav li.active').text());
			var next = (current + 1) % idBoxRotation1;
			if (0 == next) {
				next += 1;
			}
			$('#rotation ul.tabs-nav li').removeClass('active');
			$('.rotationPhoto' + next).addClass('active');
			//$('div.rotationPhoto' + next).css("display","block");
			$('div.rotationPhoto' + next).fadeIn('slow');
      //$('div.rotationPhoto' + current).css("display","none");
			$('div.rotationPhoto' + current).fadeOut('slow');
			window.clearInterval(rotationId);
			rotationId = window.setInterval(rotateRotation, rotateTime);
		}

			rotationId = window.setInterval(rotateRotation, rotateTime);

		$('#rotation ul.tabs-nav li').click(function () {
			window.clearInterval(rotationId);
			rotationId = window.setInterval(rotateRotation, rotateTimeInterval);
			var current = parseInt($(this).text());
			$('#rotation ul.tabs-nav li').removeClass('active');
			$(this).addClass('active');
			//$('div.rotationPhoto').css("display","none");
			$('div.rotationPhoto').fadeOut('slow');
			//$('div.rotationPhoto' + current).css("display","block");
			$('div.rotationPhoto' + current).fadeIn('slow');
			return false;
		});
	} else {
	   	$('#rotation ul.tabs-nav li').click(function () {
			var current = parseInt($(this).text());
			$('#rotation ul.tabs-nav li').removeClass('active');
			$(this).addClass('active');
			$('div.rotationPhoto').fadeOut('slow');
			$('div.rotationPhoto' + current).fadeIn('slow');
			return false;
		});

		//$('#rotation ul.tabs-nav li').css("display","none");
	};
/* end rotation ------------------------------- */

		$(".tabsStd ul:first-child li a, .tabs ul:first-child li a").wrapInner('<span class="cen"></span>').prepend('<span class="lft"></span>').append('<span class="rgt"></span>');



		$(".tabs").tabs({
			collapsible: false,
			deselectable: false,
			fxAutoHeight: false,
			event: 'click',
			select: function(event, ui) {
				var url = $.data(ui.tab, 'load.tabs');
				if( url ) {
					location.href = url;
					return false;
				}
				return true;
			},
			load: function(event, ui) {
				$('a', ui.panel).click(function() {
				  var tabId=$('.tabs').tabs('option', 'selected');
				 $('.tabs').tabs("url", tabId, this.href).tabs("load",tabId);
				  return false;
				});
			}
		});


	$(".tabs").removeClass("ui-widget").removeClass("ui-widget-content").removeClass("ui-corner-all").children().removeClass("ui-helper-reset").removeClass("ui-widget-header").removeClass("ui-corner-all").removeClass("ui-tabs-panel").removeClass("ui-widget-content").removeClass("ui-corner-bottom");
	$(".tabNoSelected li").removeClass("ui-tabs-selected").removeClass("ui-state-active");


			$(".tabsStd").addClass("ui-tabs").addClass("ui-tabs-collapsible");
			$(".tabsStd ul:first-child").addClass("ui-tabs-nav").addClass("ui-helper-clearfix");
			$(".tabsStd ul:first-child li").addClass("ui-corner-top");

			$(".tabsStd ul:first-child li").addClass("ui-state-default").addClass("ui-corner-top");

			$(".tabsStd ul:first-child li").mouseover(function(){
				$(this).addClass("ui-state-hover");
			}).mouseleave(function(){
				$(this).removeClass("ui-state-hover");
			});

			$(".ui-tabs ul li:first a").addClass("fisrt");



/* --- menu ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
			$("#header .menu ul.menu li.menu").mouseover(function(){
				var thisLength = $(this).find("div.submenu").length;
				if (thisLength!=0) {
					$(this).find("a").addClass("hover");
					$(this).find("a.active").addClass("active-hover").removeClass("active");
				}
				$(this).find("div.submenu").addClass("active");
			}).mouseleave(function(){
				$("#"+this.id+" a.active-hover").addClass("active").removeClass("active-hover");
				$(this).find("div.submenu").removeClass("active");
				$(this).find("a").removeClass("hover");
			});


			$("#header .menu ul.menu li.menu ul.submenu li:first-child").css('borderTop', 'none');
			$("#header .menu ul.menu li.menu div.submenu").addClass("zIndex");
				$("#header div.menu ul.menu li.menu").addClass("zIndex").attr("id", function (arr) {
					return "header-menu-" + arr;
				});
				var counterlimenu = $("#header div.menu ul.menu li.menu").length;
				for (id=0; id<=counterlimenu; id++) {
					var menuIdWidth = $('#header-menu-'+id).width();
					var submenuIdWidth = $('#header-menu-'+id+' div.submenu').width();
					var submenuIdCounter = $('#header-menu-'+id+' div.submenu ul.submenu').length;
					if (submenuIdWidth <= menuIdWidth+15) submenuIdWidth = menuIdWidth+30;
					$('#header-menu-'+id).width(menuIdWidth);
					if (submenuIdCounter==2) {
						$('#header-menu-'+id+' div.submenu').width(submenuIdWidth*2+5);
					} else {
						$('#header-menu-'+id+' div.submenu').width(submenuIdWidth);
					}
					$('#header-menu-'+id+' div.submenu ul.submenu').width(submenuIdWidth);
					$('#header-menu-'+id+' div.submenu ul.submenu li.submenu').width(submenuIdWidth);
					$('#header-menu-'+id+' div.submenu ul.submenu li.submenu a').width(submenuIdWidth-26);
				}
/* --- end menu ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* --- adminMenu ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

	var adminMenu = $.cookie('adminMenu');
	var COOKIE_NAME = adminMenu;
	var ADDITIONAL_COOKIE_NAME = 'additional';
	var options = { path: '/', expires: 7200 };

	$('#header .toggleAdminMenu').click(function () {
	  if ($(".adminMenu").is(":hidden")) {
  		$(".adminMenu").slideDown(300);
  		$.cookie('adminMenu', 'expanded-adminMenu', options);
  		$(this).html("Zwiń menu");
	  } else {
  		$(".adminMenu").slideUp(300);
  		$.cookie('adminMenu', 'collapsed-adminMenu', options);
  		$(this).html("Rozwiń menu");
	  }
	  return false;
	});

/* --- end adminMenu ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */


/* --- galleryTabId ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
		var $photoGalleryTab = $("#photoGalleryTab").tabs({
			collapsible: false,
			deselectable: false,
			event: 'click'
		});

		$("#photoGalleryTab").css({'padding': '0'}).removeClass("ui-widget").removeClass("ui-widget-content").removeClass("ui-corner-all").children().removeClass("ui-helper-reset").removeClass("ui-widget-header").removeClass("ui-corner-all").removeClass("ui-widget-content").children().removeClass("ui-corner-bottom").removeClass("ui-corner-top");


		var photoGalleryTabsNavLength = $("#photoGalleryTab .ui-tabs-nav li").length;
		var selectedTabsNav = $photoGalleryTab.data('selected.tabs');

		$('#photoGalleryTab .next').click(function() {
			var selected = $photoGalleryTab.data('selected.tabs');
			$photoGalleryTab.tabs('select', selected + 1);
			return false;
		});
		$('#photoGalleryTab .prev').click(function() {
			var selected = $photoGalleryTab.data('selected.tabs')
			$photoGalleryTab.tabs('select', selected - 1);
			return false;
		});


		$('#photoGalleryTab .ui-tabs-nav li a, #photoGalleryTab .next, #photoGalleryTab .prev').click(function() {
			var selectedTabsNav = $photoGalleryTab.data('selected.tabs')+1;
			if (photoGalleryTabsNavLength > 1 && selectedTabsNav!=photoGalleryTabsNavLength) {
				$("#photoGalleryTab .next").css('display', 'block');
			} else {
				$("#photoGalleryTab .next").css('display', 'none');
			};
			if (selectedTabsNav > 1) {
				$("#photoGalleryTab .prev").css('display', 'block');
			} else {
				$("#photoGalleryTab .prev").css('display', 'none');
			}
			return false;
		});

		if (photoGalleryTabsNavLength >= 1 && selectedTabsNav!=photoGalleryTabsNavLength-1) $("#photoGalleryTab .next").css('display', 'block');
		if (selectedTabsNav != 0) $("#photoGalleryTab .prev").css('display', 'block');


/* --- end galleryTabId ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

$(".menu-list ul ul ul").parents("ul").css('background', 'none');


// zIndex

	var zIndexNumber = 80000;
	$('.zIndex').each(function() {
		$(this).css('zIndex', zIndexNumber);
		zIndexNumber -= 1;
	});

// end zIndex




});



