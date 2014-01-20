$(function(){
    $('#nav').find('a').click(function(e){
        e.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
    });
});