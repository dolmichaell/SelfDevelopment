// Определим объект для счетчика нотификаций
var notifications = {
    counter: 0,
    count: function () {
        this.counter++;
    }
};

// Определим для хранения логов
var logger = {
    logs: []
};

var emitter = {
    eventDb: {
        event: {
            subscriber: "handler"
        }
    },
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (this.eventDb.hasOwnProperty(event)) {
        //     this.eventDb[event] = this[event];
        } else {
            this.eventDb[event] = {}
                //this.eventDb[event] = subscriber: handler
        }

        console.log(this);
        //console.log(eventObj);
        console.log(this.eventDb);
        console.log(notifications.counter);
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {

    },

    /**
     * @param {String} event
     */
    emit: function (event) {

    }
};
emitter
    .on('new_notification', notifications, notifications.count)
    .on('new_notification', logger, function () {
        this.logs.push('Произошло новое событие new_notification');
    })
    .on('new_notification', logger, function () {
        // this указывает на logger
        this.logs.push('Добавлена новая нотификация. Количество - ' + notifications.counter);
    })
    .emit('new_notification');
//======================================
// emitter
//     .off('new_notification', logger)
//     .emit('new_notification')
//     .on('new_notification', logger, function () {
//         this.logs.push('Новое событие new_notification!');
//     })
//     .emit('new_notification');

