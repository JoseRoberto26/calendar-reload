var app = {

    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);
    }
};

function openCalendar() {
    var calendarModal = document.querySelector('.calendar-modal-background');
    calendarModal.setAttribute('style', 'display:flex;');
    console.log("open")
}

function closeCalendar() {
    var calendarModal = document.querySelector('.calendar-modal-background');
    calendarModal.setAttribute('style', 'display:none;');
}

app.initialize();