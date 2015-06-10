(function ($) {
  $('body').on('mouseover', 'iframe', function () {
    var iframe = this.contentDocument;

    $('#buttonDiv', iframe).after('<a id="rp-print" class="filter" href="">filter</a>');

    $('#rp-print', iframe).click(function (event) {
      event.preventDefault();

      if ($(this).hasClass('filter')) {
        $('#printSection #cards .artifact:not(.rp-keep)', iframe).css('display', 'none');
        $(this).html('reset');
      }
      else {
        $('#printSection #cards .artifact:not(.rp-keep)', iframe).css('display', 'block');
        $('#printSection #cards .artifact', iframe).css('background-color', '#FFF');
        $(this).html('filter');
      }

      $(this).toggleClass('filter');
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
