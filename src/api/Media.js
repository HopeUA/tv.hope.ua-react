import fetch from 'isomorphic-fetch';
import Promise from 'bluebird';

/**
 * Список выпусков (новые, рекомендуемые, из программы...)
 * Список программ (популярные, все)
 * Программа по коду
 * Выпуск по коду
 */
class Media {
    static endpoint = 'https://media.s.hope.ua/v1';

    static async getEpisodes(params) {
        const resource = 'episodes';

        switch (params.type) {
            case 'new':
                break;
            case 'recommended':
                break;
            case 'top':
                break;
            case 'now':
                break;
            case 'show':
                break;
            default:
                throw new Error(`Media API: ${params.type} is not defined`);
        }

        const url = params.type === 'show' ?
            `${this.endpoint}/shows/${params.showId}/${resource}`
            : `${this.endpoint}/${resource}/${params.type}`;

        const response = await fetch(url);
        const result = await response.json();

        return result.data;
    }

    static async getEpisodeWithNeighbors(id) {
        const main = await this.getEpisode(id);

        if (!main) {
            return [];
        }

        const loaders = [];
        const result = [main];

        if (main.links) {
            if (main.links.prev) {
                loaders.push(this.getEpisode(main.links.prev));
            }
            if (main.links.next) {
                loaders.push(this.getEpisode(main.links.next));
            }
        }

        return result.concat(await Promise.all(loaders));
    }

    static async getEpisode(id) {
        const resource = 'episodes';

        const url = `${this.endpoint}/${resource}/${id}`;

        const response = await fetch(url);
        const result = await response.json();

        return result;
    }

    static async getShows(params) {
        const resource = 'shows';
        const limit = '?limit=16';

        switch (params.type) {
            case 'popular':
                break;
            default: throw new Error(`Media API: ${params.type} is not defined`);
        }

        const url = `${this.endpoint}/${resource}/${params.type}${limit}`;

        const response = await fetch(url);
        const result = await response.json();

        return result.data;
    }

    static async getShow(id) {
        const resource = 'shows';

        const url = `${this.endpoint}/${resource}/${id}`;

        const response = await fetch(url);
        const result = await response.json();

        return result;
    }
}

export default Media;
