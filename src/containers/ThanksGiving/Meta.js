const Meta = () => {
    const title = 'Свято подяки | Телеканал «Надія»';
    const description = 'Кілька сотень тисяч українців зберуться на Хрещатику в Києві, щоб сказати «Дякую» Богу';
    const url = 'https://tv2.hope.ua/thanksgiving';
    const image = 'https://tv2.hope.ua/dist/11f52603a4d5c926c78738d8225be7ff.png';

    return {
        title,
        description,
        meta: [
            { property: 'og:type', content: 'article' },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: image },
            { property: 'og:url', content: url },

            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:site', content: '@ua_hope' },
            { name: 'twitter:image', content: image }
        ]
    };
};

export default Meta;
