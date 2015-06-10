(function ($) {
  $('body').on('mouseover', 'iframe', function () {
    var iframe = this.contentDocument;

    $('#buttonDiv', iframe).after('<a id="rp-print" class="filter" href="">filter</a>');

    $('#rp-print', iframe).click(function (event) {
      event.preventDefault();

      $('#printSection #cards .artifact:not(.rp-keep)', iframe).css('display', 'none');
    });

    $('#printSection #cards .artifact', this.contentDocument).click(function () {
      $(this).toggleClass('rp-keep');

      if ($(this).hasClass('rp-keep')) {
        $(this).css('background-color', '#35B2E4');
      }
      else {
        $(this).css('background-color', '#FFF');
      }
    });

    $('body').off();
  });
})(jQuery);
