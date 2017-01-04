lines (85 sloc)  2.8 KB
;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.fn.simpleWordWrapper = function (options) {
    options = $.extend({
      classWrapperName: "accordion-wrapper",
      classItemName: "accordion",
      classTitleName: "accordion-title",
      classContentName: "accordion-content",
      spoilerMode: false,
      callbacks: {
        callBeforeChange: null,
        callAfterChange: null
      }
    }, options);
    var element = this,
      classWrapperName = options.classWrapperName,
      classWrapper = "."+classWrapperName,
      classItemName = options.classItemName,
      classItem = "."+classItemName,
      classContentName = options.classContentName,
      classContent = "."+classContentName,
      spoilerMode = options.spoilerMode,
      // CallBacks
      callBeforeChange = options.callbacks.callBeforeChange,
      callAfterChange = options.callbacks.callAfterChange;
    var init = function init() {

    }();
  }
});