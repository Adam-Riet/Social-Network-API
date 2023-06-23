const { format } = require('date-fns');

function formatDate(date) {
    return format(date, 'yyyy-MM-dd HH:mm');
}

module.exports = formatDate;