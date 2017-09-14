import fetch from 'isomorphic-fetch';
import uri from 'urijs';

function normalizeDate(date) {
    date.setSeconds(0);
    date.setMilliseconds(0);
}

/**
 * Список событий
 */
class Scheduler {
    static endpoint = 'https://scheduler.s.hope.ua/v1';

    static async getEvents({ dateFrom = null, dateTo = null } = {}) {
        const resource = 'events';

        const url = uri(`${this.endpoint}/${resource}`);
        if (dateFrom) {
            normalizeDate(dateFrom);
            url.addSearch('date', dateFrom.toString());
        }
        if (dateTo) {
            normalizeDate(dateFrom);
            url.addSearch('dateEnd', dateTo.toString());
        }

        const response = await fetch(url.toString());
        const result = await response.json();

        return Array.isArray(result.data) ? result.data : [];
    }
}

export default Scheduler;
