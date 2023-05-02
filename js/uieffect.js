$(function () {

	var _html = $('html');
	var _body = $('body');
	var _window = $(window);

	var ww = _window.width();
	var wh = _window.height();


  // 頁籤  ////////////////////////////
  var _tabSet = $('.tabSet');
  _tabSet.each(function(){
    let _this = $(this);
    let _tabItems = _this.find('.tabItems');
    let _tabButton = _tabItems.find('button');
    let _tabContent = _this.find('.tabContent');
    let i = _tabButton.filter('.active').index();

    _tabContent.not(':last').append('<button class="skip"></button>')
    let _skip = _tabContent.find('.skip');
    
    _tabContent.eq(i).show();
    _tabButton.attr('tabindex' , '-1' ).eq(i).attr('tabindex' , '0' );

    _tabButton.on('click' , function(){
      i = $(this).index();
      $(this).addClass('active').attr('tabindex' , '0' ).siblings().removeClass('active').attr('tabindex' , '-1' );
      _tabContent.hide().eq(i).show();
    })

    _skip.on('focus', function(){
      _tabButton.eq( $(this).parent().index()+1 ).focus();
    })

    _tabButton.on('focus', function(){
      $(this).trigger('click');
    })
  })

  //////////////////////////////////////////////
  // 燈箱 //////////////////////////////////////
  var _lightbox = $('.lightbox');
  var _showLightbox =  $('.showLightbox');
  const lbxSpeed = 300;
  var _lightboxNow;

  _lightbox.before('<div class="coverAll"></div>');

  // hide
  _lightbox.each(function(){
    let _this = $(this);
    let _hideLightbox = _this.find('.closeThis');
    let _cover = _this.prev('.coverAll');

    _hideLightbox.click( function(){
      _this.hide();
      _cover.stop(true, false).fadeOut(lbxSpeed);
      _body.removeClass('noScroll');
    })
    _cover.click( function(){
      _this.hide();
      _cover.stop(true, false).fadeOut(lbxSpeed);
      _body.removeClass('noScroll');
    })


  })

  // show
  _showLightbox.click(function(){
    let lbxID = $(this).attr('data-lbxid');

    _lightboxNow = _lightbox.filter( function(){ return $(this).attr('data-lbxid') === lbxID} );
    _lightboxNow.show().prev('.coverAll').stop(true, false).fadeIn(lbxSpeed);
    _body.addClass('noScroll');
  })


})