(function($) {
var slider={
    slides: ['./images/1.png','./images/2.png','./images/3.png','./images/4.png','./images/5.png'],
    frame: 0,
    set: function(image) {
        document.getElementById("src").style.backgroundImage="url("+image+")";
    },
    init: function() {
        this.set(this.slides[this.frame]);
    },
    left: function() {
        this.frame--;
        if (this.frame<0) this.frame=this.slides.length-1;
        this.set(this.slides[this.frame]);
    },
    right: function() {
        this.frame++;
        if (this.frame==this.slides.length) this.frame=0;
        this.set(this.slides[this.frame]);
    }
};
$(document).ready(function(){
    slider.init();
        setInterval(function(){
            slider.right();
        },5000);
     $('.left').click(function(){
        slider.left();
     });
     $('.right').click(function(){
             slider.right();
          });
});
})(jQuery);