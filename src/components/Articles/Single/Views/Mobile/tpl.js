import React from 'react';

import Styles from './Styles/main.scss';

export default function Common() {
    const imageStyle = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/ADUU/episodes/00317/ADUU00317-cover.jpg)'
    };

    return (
        <section className={ Styles.singleComponent }>
            <h1 className={ Styles.title }>
                Почему люди лучше запоминают информацию, когда видят её, а не когда слышат?
            </h1>
            <span className={ Styles.date }>15 ноября, 2017</span>
            <div className={ Styles.textContainer }>
                <span className={ Styles.initialLetter }>В</span>
                <p className={ Styles.paragraph }>
                    марте 2013 года украинский христианский телеканал «Надія», получив лицензию, вышел в
                    эфир на спутник Astra 4A (Sirius). Как изменилась «Надія» за это временя?
                </p>
            </div>
            <div className={ Styles.image } style={ imageStyle }/>
            <p className={ Styles.paragraph }>
                Прежде всего, за этот довольно короткий период значительно расширилась аудитория канала.
                Ведь спутник, на котором находится это медиа, – один из самых популярных. На Astra 4A настроено
                более 4,5 млн. антенн в Украине. Кроме территории нашей страны, этот спутник охватывает Европу,
                Азию, часть Африки, жители которых являются потенциальными зрителями «Надії».
            </p>
            <p className={ Styles.paragraph }>
                Ретрансляция спутникового сигнала осуществляется в Интернете, эфирных станциях и кабельных сетях.
                За эти 2 года телеканал
                <a href="#">&nbsp;«Надія»&nbsp;</a>
                заключил договоры с 130 кабельными операторами по всей
                Украине  (в том числе с такими масштабными провайдерами, как «Воля-кабель», «Триолан», «Датагруп»).
            </p>
        </section>
    );
}
