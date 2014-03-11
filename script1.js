 $(document).ready(function() {
var $b = $('button.learn-more'), $hide = $('.hide');
 
$b.click(function() {
var target = $(this).data("target");
$hide.hide();
$(target).show();
})
});