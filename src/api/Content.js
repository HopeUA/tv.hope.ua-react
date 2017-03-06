import fetch from 'isomorphic-fetch';

/**
 * Список выпусков (новые, рекомендуемые, из программы...)
 * Список программ (популярные, все)
 * Программа по коду
 * Выпуск по коду
 */
class Content {
    static endpoint = 'https://tv.hope.ua/api';

    static async getArticles(params) {
        const localEndpoint = 'https://tv.hope.ua/api';
        const resource = 'articles';
        const limit = 'limit=15';

        const url = `${localEndpoint}/${resource}.json?category=${params.type}&${limit}`;

        const response = await fetch(url);
        const result = await response.json();

        return result.data;
    }
}

export default Content;
