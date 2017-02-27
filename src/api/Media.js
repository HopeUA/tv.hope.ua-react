import fetch from 'isomorphic-fetch';

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

        const url = `${this.endpoint}/${resource}/${params.type}`;

        const response = await fetch(url);
        const result = await response.json();

        return result.data;
    }

    static async getShows(params) {
        const resource = 'shows';
        const limit = '?limit=20';

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
}

export default Media;
