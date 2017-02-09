import fetch from 'isomorphic-fetch';

/**
 * Список выпусков (новые, рекомендуемые, из программы...)
 * Список программ (популярные, все)
 * Программа по коду
 * Выпуск по коду
 */
export default class Media {
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
        const result = await response.json;

        return result.data;
    }
    // async getShows(params) {
    //     switch (params.type) {
    //         case
    //     }
    // }
}
