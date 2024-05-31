// An object literal
var app = {
  init: function() {
    console.log('🟢 Cedar of Hope ⛪');

    app.menuActive();
  },
  menuActive: function() {
    var headerMenu = document.querySelector('ul.navbar-nav');
    var footerMenu = document.querySelector('ul.footer-nav');

    var pagePath = document.location.pathname;

    headerMenu.querySelectorAll('li').forEach(function(item){
      if(item.querySelector('a').getAttribute('href') === pagePath){
        item.classList.add('selected');
      }
    });

    footerMenu.querySelectorAll('li').forEach(function(item){
      if(item.querySelector('a').getAttribute('href') === pagePath){
        item.classList.add('selected');
      }
    });

  },
  gCalendar: function() {
    document.addEventListener('DOMContentLoaded', function() {
      var calendarEl = document.getElementById('gcalendar');
    
        var calendar = new FullCalendar.Calendar(calendarEl, {
            timeZone: '############',
            googleCalendarApiKey: '#################', // googleCalendarApiKey
            headerToolbar: {
                start: 'prev,next today',
                center: 'title',
                end: 'dayGridMonth,timeGridWeek,timeGridDay,listYear'
            },
            events: '######@gmail.com' // calendarId
        });
    
        calendar.render();

        console.log(calendar.googleCalendarApiKey);
    });
  }
};
(function() {
  app.init();

  if(document.getElementById('gcalendar')){
    app.gCalendar();
  }
})();
