import fetch from 'isomorphic-fetch';
import uri from 'urijs';

/**
 * Список событий
 */
class Scheduler {
    static endpoint = 'https://scheduler.s.hope.ua/v1';

    static async getEvents({ dateFrom = null, dateTo = null } = {}) {
        const resource = 'events';

        const url = uri(`${this.endpoint}/${resource}`);
        if (dateFrom) {
            url.addSearch('date', dateFrom);
        }
        if (dateTo) {
            url.addSearch('dateEnd', dateTo);
        }

        const response = await fetch(url);
        const result = await response.json();

        return Array.isArray(result.data) ? result.data : [];
    }
}

export default Scheduler;
