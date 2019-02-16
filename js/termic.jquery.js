(function () {

  let $;

  $ = jQuery;

  $.fn.Termic = function (terminal, commands) {
    let $el,
      $terminal;
    $el = $(this);
    $terminal = $(terminal);
    return $el.data('Termic', Termic.prototype.constructer($el[0], $terminal[0], commands));
  };
}).call(this);

setTimeout(() => {
  $('#terminal_cmd').Termic('#terminal', {
    __init__: {
      handler() {
        $('body').addClass('on');
        return 'welcome to letsproto_ initiative\ntype help and hit enter';
      },
    },
    about: {
      description: 'about letsproto_',
      handler() {
        return 'letsproto_ is an online lab for testing and learning all kinds of technologies out there,\na place for great developers to create amazing codes, programs and awesome experiments.';
      },
    },
    motto: {
      description: 'our motto',
      handler() {
        return "\"it's not how good you are!! It's how good you want to be.\"";
      },
    },
    contact: {
      description: 'Email Address',
      handler() {
        return "Email Address: as@letsproto.com";
      },
    },
  });
}, 2000);

setInterval(() => {
  let title = $('title').text();
  title == 'letsproto_' ? $('title').text('letsproto') : $('title').text('letsproto_');
}, 700);
