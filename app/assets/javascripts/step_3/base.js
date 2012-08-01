//= require ../wheel_base

Modernizr.load({
  test: Wheel.Utils.Loader.canZepto(),
  yep:  '/assets/wheel/vendor/javascripts/zepto/zepto-1.0rc1.js',
  nope: '/assets/wheel/vendor/javascripts/jquery/jquery-1.7.1.js',
  both: '/assets/step_2/app_manifest.js'
});
