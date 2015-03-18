$('a').smoothScroll({offset: -120,
  afterScroll: function() {
    this.addClass("flash-success")
  },
  easing: 'swing',
});