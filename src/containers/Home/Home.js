import React, { Component, PropTypes } from 'react';
// import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';

import Helmet from 'react-helmet';
import Seo from 'data/seo.json';
import { Episodes, Live } from 'components/Home';

// @asyncConnect([{
//     deferred: true,
//     promise: ({ store: { dispatch, getState } }) => {
//         const state = getState();
//         const promises = [];
//
//         return Promise.all(promises);
//     }
// }])
@connect(({ browser }) => {
    return { browser };
})
/* eslint-disable react/prefer-stateless-function */
export default class Home extends Component {
    static propTypes = {
        browser: PropTypes.object.isRequired,
        items: PropTypes.array.isRequired,
        dynamic: PropTypes.boolean,
        canRefresh: PropTypes.boolean,
        title: PropTypes.string.isRequired
    };

    render() {
        const { browser } = this.props;

        const data = '{"data":[{"uid":"HDVU01714","title":"Знову в подорож","description":"Місцеві жителі називають цю країну Бхарат, інколи Хіндустан. Що це за країна, та яке яскраве свято є в цій країні розповість Добрячок.","tags":["дитяча історія","історія для дітей","повчальна історія","поучительная история","детская история","история для детей","Індія","Индия","корова","священна корова","холи","холі","свято фарб","праздник красок"],"publish":"2016-04-03T11:20:00.000Z","language":"uk","author":"Стангеліні Ж.","hd":false,"views":0,"source":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01714/HDVU01714-hopeua.mov"},"youtube":{"id":"IoaOqwHjJWI","channel":"hopeua"}},"image":"https://cdn.hope.ua/media/shows/HDVU/episodes/01714/HDVU01714-cover.jpg","links":{"prev":"HDVU01815"},"trailers":{"main":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01714/HDVU01714-trailer-main.mov"}},"today":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01714/HDVU01714-trailer-today.mov"}}},"show":{"uid":"HDVU","title":"В гостях у Добрячка","description":{"short":"Завітайте до нас неодмінно!","medium":"Добрячок завжди радий вас вітати і в школі добрих порад буде вас навчати.","days":"","time":"","long":""},"images":{"cover":"https://cdn.hope.ua/media/shows/HDVU/HDVU-cover.jpg","background":"https://cdn.hope.ua/media/shows/HDVU/HDVU-background.jpg"},"category":{"uid":"child","title":{"ru":"Детские","uk":"Дитячі"},"sort":5}}},{"uid":"HDVU01815","title":"Що робити з горобцем?","description":"Де краще жити горобцю? На волі чи в неволі? Складне питання. Давайте спробуємо розібратись в ньому протягом цієї програми. А ще спробуємо виготовити птаха у клітці своїми руками.","tags":["горобець","птахи на волі","птахи в неволі","клітка для папуги","довгожителі серед птахів","папуга","чим годувати горобців","долгожители среди птиц","Добрячок про птахів","папугаи","канарейки","домашние питомцы","птички"],"publish":"2016-03-27T11:20:00.000Z","language":"uk","author":"Шкаліков М.","hd":false,"views":0,"source":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01815/HDVU01815-hopeua.mov"},"youtube":{"id":"olYPE5z1Ggs","channel":"hopeua"}},"image":"https://cdn.hope.ua/media/shows/HDVU/episodes/01815/HDVU01815-cover.jpg","links":{"prev":"HDVU02315","next":"HDVU01714"},"trailers":{"main":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01815/HDVU01815-trailer-main.mov"}},"today":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01815/HDVU01815-trailer-today.mov"}}},"show":{"uid":"HDVU","title":"В гостях у Добрячка","description":{"short":"Завітайте до нас неодмінно!","medium":"Добрячок завжди радий вас вітати і в школі добрих порад буде вас навчати.","days":"","time":"","long":""},"images":{"cover":"https://cdn.hope.ua/media/shows/HDVU/HDVU-cover.jpg","background":"https://cdn.hope.ua/media/shows/HDVU/HDVU-background.jpg"},"category":{"uid":"child","title":{"ru":"Детские","uk":"Дитячі"},"sort":5}}},{"uid":"HDVU02315","title":"Пташка чи фрукт","description":"У друзів Добрячка виникла суперечка. Ківі — це фрукт, чи пташка? Як ви вважаєте малята? <br />Що? Теж не знаєте? Ну, тоді дивіться нашу передачу.","tags":["ківі","фрукти","фруктові бутерброди","бутерброди для дітей","символ Нової Зеландії","птаха - символ Нової Зеландії"],"publish":"2016-03-20T12:20:00.000Z","language":"uk","author":"Стангеліні Ж.","hd":false,"views":0,"source":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/02315/HDVU02315-hopeua.mov"},"youtube":{"id":"WCOwZ5Sii7k","channel":"hopeua"}},"image":"https://cdn.hope.ua/media/shows/HDVU/episodes/02315/HDVU02315-cover.jpg","links":{"prev":"HDVU01715","next":"HDVU01815"},"trailers":{"main":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/02315/HDVU02315-trailer-main.mov"}},"today":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/02315/HDVU02315-trailer-today.mov"}}},"show":{"uid":"HDVU","title":"В гостях у Добрячка","description":{"short":"Завітайте до нас неодмінно!","medium":"Добрячок завжди радий вас вітати і в школі добрих порад буде вас навчати.","days":"","time":"","long":""},"images":{"cover":"https://cdn.hope.ua/media/shows/HDVU/HDVU-cover.jpg","background":"https://cdn.hope.ua/media/shows/HDVU/HDVU-background.jpg"},"category":{"uid":"child","title":{"ru":"Детские","uk":"Дитячі"},"sort":5}}},{"uid":"HDVU01715","title":"Хвороба річки","description":"Навіть річки іноді хворіють! Але ж як? Адже, вони ж не люди,  — можете сказати ви. Справді, не люди. Але завдяки людям хворіють. Дивіться детальніше в програмі.","tags":["хвороби","забруднення річок","хвороба тварин","хвороба людей від забруднених річок","забрудення навколишнього середовища","сміття в річці","мусор в реках","болезнь рек","убирать мусор","береги природу","не мусорь","Добрячок про охорону природи","добра порада"],"publish":"2016-03-13T12:20:00.000Z","language":"uk","author":"Стангеліні Ж.","hd":false,"views":0,"source":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01715/HDVU01715-hopeua.mov"},"youtube":{"id":"tFZL4j6b4ug","channel":"hopeua"}},"image":"https://cdn.hope.ua/media/shows/HDVU/episodes/01715/HDVU01715-cover.jpg","links":{"prev":"HDVU02515","next":"HDVU02315"},"trailers":{"main":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01715/HDVU01715-trailer-main.mov"}},"today":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01715/HDVU01715-trailer-today.mov"}}},"show":{"uid":"HDVU","title":"В гостях у Добрячка","description":{"short":"Завітайте до нас неодмінно!","medium":"Добрячок завжди радий вас вітати і в школі добрих порад буде вас навчати.","days":"","time":"","long":""},"images":{"cover":"https://cdn.hope.ua/media/shows/HDVU/HDVU-cover.jpg","background":"https://cdn.hope.ua/media/shows/HDVU/HDVU-background.jpg"},"category":{"uid":"child","title":{"ru":"Детские","uk":"Дитячі"},"sort":5}}},{"uid":"HDVU02515","title":"Лісова красуня","description":"Ну, хто з вас, друзі, не милувався таким прекрасним деревом, як берізка? Крім  гарного вигляду берізка ще й має лікувальні властивості.","tags":["березовий сік","березова кора","березові  сережки","лікувальні властивості берези","повчання від Добрячка","лікар неболить","поради","добрі поради"],"publish":"2016-03-06T12:00:00.000Z","language":"uk","author":"Стангеліні Ж.","hd":false,"views":0,"source":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/02515/HDVU02515-hopeua.mov"},"youtube":{"id":"0JRMVLGVXYw","channel":"hopeua"}},"image":"https://cdn.hope.ua/media/shows/HDVU/episodes/02515/HDVU02515-cover.jpg","links":{"prev":"HDVU01515","next":"HDVU01715"},"trailers":{"main":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/02515/HDVU02515-trailer-main.mov"}},"today":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/02515/HDVU02515-trailer-today.mov"}}},"show":{"uid":"HDVU","title":"В гостях у Добрячка","description":{"short":"Завітайте до нас неодмінно!","medium":"Добрячок завжди радий вас вітати і в школі добрих порад буде вас навчати.","days":"","time":"","long":""},"images":{"cover":"https://cdn.hope.ua/media/shows/HDVU/HDVU-cover.jpg","background":"https://cdn.hope.ua/media/shows/HDVU/HDVU-background.jpg"},"category":{"uid":"child","title":{"ru":"Детские","uk":"Дитячі"},"sort":5}}},{"uid":"HDVU01515","title":"Скелет","description":"Скелет людини виконує багато функцій. Яких? А дивіться нашу передачу!","tags":["скелет человека","скелет людини","кости","кістки","дитяча передача","детская передача","передача для детей","Добрячок про скелет","поучительная передача для детей"],"publish":"2016-02-28T12:20:00.000Z","language":"uk","author":"Стангеліні Ж.","hd":false,"views":0,"source":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01515/HDVU01515-hopeua.mov"},"youtube":{"id":"tn6ArdfnYNI","channel":"hopeua"}},"image":"https://cdn.hope.ua/media/shows/HDVU/episodes/01515/HDVU01515-cover.jpg","links":{"prev":"HDVU02615","next":"HDVU02515"},"trailers":{"main":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01515/HDVU01515-trailer-main.mov"}},"today":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01515/HDVU01515-trailer-today.mov"}}},"show":{"uid":"HDVU","title":"В гостях у Добрячка","description":{"short":"Завітайте до нас неодмінно!","medium":"Добрячок завжди радий вас вітати і в школі добрих порад буде вас навчати.","days":"","time":"","long":""},"images":{"cover":"https://cdn.hope.ua/media/shows/HDVU/HDVU-cover.jpg","background":"https://cdn.hope.ua/media/shows/HDVU/HDVU-background.jpg"},"category":{"uid":"child","title":{"ru":"Детские","uk":"Дитячі"},"sort":5}}},{"uid":"HDVU02615","title":"Квітки, що схожі на сонце","description":"Спостерігаючи за цією рослиною, наші предки дали їй кілька назв.  Як тільки вони її не називали! Одуй-лисина, пушок, подуйниця, лисяк, лисоголовка. Що ж це за квітка?","tags":["кульбаба","квіти","поробка з серветок","квіти з серветок","листівка","листівка своїми руками","лікувальні властивости кульбаби","мед з кульбаби","лікар Неболить"],"publish":"2016-02-21T12:00:00.000Z","language":"uk","author":"Стангеліні Ж.","hd":false,"views":0,"source":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/02615/HDVU02615-hopeua.mov"},"youtube":{"id":"CwkIOx2OeTU","channel":"hopeua"}},"image":"https://cdn.hope.ua/media/shows/HDVU/episodes/02615/HDVU02615-cover.jpg","links":{"prev":"HDVU04215","next":"HDVU01515"},"trailers":{"main":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/02615/HDVU02615-trailer-main.mov"}},"today":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/02615/HDVU02615-trailer-today.mov"}}},"show":{"uid":"HDVU","title":"В гостях у Добрячка","description":{"short":"Завітайте до нас неодмінно!","medium":"Добрячок завжди радий вас вітати і в школі добрих порад буде вас навчати.","days":"","time":"","long":""},"images":{"cover":"https://cdn.hope.ua/media/shows/HDVU/HDVU-cover.jpg","background":"https://cdn.hope.ua/media/shows/HDVU/HDVU-background.jpg"},"category":{"uid":"child","title":{"ru":"Детские","uk":"Дитячі"},"sort":5}}},{"uid":"HDVU04215","title":"Подорож до Домінікани","description":"Ви любите подорожувати? Тоді вам неодмінно потрібно подивитись цю програму, адже, сьогодні ми подорожуватимемо у Домінікану!!!!!","tags":["Добрячок","поучительные истории","загадки для ребят","загадки от Добрячка","загадкі від Добрячка","загадки для малят","дитяча програма","детская программа","кулинария для детей","робити добро","делать добро","позитивна програма","Доминикана","путешествие для ребят","подорож для дітей","Домінікана"],"publish":"2016-02-14T12:20:00.000Z","language":"uk","author":"Стангеліні Ж.","hd":false,"views":0,"source":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/04215/HDVU04215-hopeua.mov"},"youtube":{"id":"6OByRrS0H6w","channel":"hopeua"}},"image":"https://cdn.hope.ua/media/shows/HDVU/episodes/04215/HDVU04215-cover.jpg","links":{"prev":"HDVU04315","next":"HDVU02615"},"trailers":{"main":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/04215/HDVU04215-trailer-main.mov"}},"today":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/04215/HDVU04215-trailer-today.mov"}}},"show":{"uid":"HDVU","title":"В гостях у Добрячка","description":{"short":"Завітайте до нас неодмінно!","medium":"Добрячок завжди радий вас вітати і в школі добрих порад буде вас навчати.","days":"","time":"","long":""},"images":{"cover":"https://cdn.hope.ua/media/shows/HDVU/HDVU-cover.jpg","background":"https://cdn.hope.ua/media/shows/HDVU/HDVU-background.jpg"},"category":{"uid":"child","title":{"ru":"Детские","uk":"Дитячі"},"sort":5}}},{"uid":"HDVU04315","title":"Снігове диво","description":"Дивуєшся неймовірно, коли починаєш розглядати сніжинки. Адже, немає у всьому світі двох однаковісіньких сніжинок. Всі вони унікальні. Так само, як і всі люди на планеті.","tags":["Добрячок","поучительные истории","загадки для ребят","загадки от Добрячка","загадкі від Добрячка","загадки для малят","дитяча програма","детская программа","кулинария для детей","робити добро","делать добро","позитивна програма","сніг","лід","диво","сніжинки","снежинки"],"publish":"2016-02-07T12:20:00.000Z","language":"uk","author":"Стангеліні Ж.","hd":false,"views":0,"source":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/04315/HDVU04315-hopeua.mov"},"youtube":{"id":"MgeGOV6vXTM","channel":"hopeua"}},"image":"https://cdn.hope.ua/media/shows/HDVU/episodes/04315/HDVU04315-cover.jpg","links":{"prev":"HDVU01415","next":"HDVU04215"},"trailers":{"main":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/04315/HDVU04315-trailer-main.mov"}},"today":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/04315/HDVU04315-trailer-today.mov"}}},"show":{"uid":"HDVU","title":"В гостях у Добрячка","description":{"short":"Завітайте до нас неодмінно!","medium":"Добрячок завжди радий вас вітати і в школі добрих порад буде вас навчати.","days":"","time":"","long":""},"images":{"cover":"https://cdn.hope.ua/media/shows/HDVU/HDVU-cover.jpg","background":"https://cdn.hope.ua/media/shows/HDVU/HDVU-background.jpg"},"category":{"uid":"child","title":{"ru":"Детские","uk":"Дитячі"},"sort":5}}},{"uid":"HDVU01415","title":"Два світила","description":"Сьогодні ми поговоримо про небесні світила. Ні, ні, не про всі небесні світила. Тільки про сонце та місяць. Але скільки всього можна про них дізнатися!","tags":["сонце","місяць","солнце","луна","молодая луна","полнолуние","земля","тень","светила","небесні світила","місячний цикл"],"publish":"2016-01-24T12:00:00.000Z","language":"uk","author":"Стангеліні Ж.","hd":false,"views":0,"source":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01415/HDVU01415-hopeua.mov"},"youtube":{"id":"V51S7ihlvpY","channel":"hopeua"}},"image":"https://cdn.hope.ua/media/shows/HDVU/episodes/01415/HDVU01415-cover.jpg","links":{"prev":"HDVU01315","next":"HDVU04315"},"trailers":{"main":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01415/HDVU01415-trailer-main.mov"}},"today":{"local":{"url":"https://cdn.hope.ua/media/shows/HDVU/episodes/01415/HDVU01415-trailer-today.mov"}}},"show":{"uid":"HDVU","title":"В гостях у Добрячка","description":{"short":"Завітайте до нас неодмінно!","medium":"Добрячок завжди радий вас вітати і в школі добрих порад буде вас навчати.","days":"","time":"","long":""},"images":{"cover":"https://cdn.hope.ua/media/shows/HDVU/HDVU-cover.jpg","background":"https://cdn.hope.ua/media/shows/HDVU/HDVU-background.jpg"},"category":{"uid":"child","title":{"ru":"Детские","uk":"Дитячі"},"sort":5}}}]}';

        const items = JSON.parse(data).data;

        const liveData = '[{"id":"5809f6da3e12111000b36470","date":"2016-10-24T09:00:00.000Z","show":{"uid":"PNTR","title":"Познавая непостижимое","description":{"short":""},"images":{"cover":"https://cdn.hope.ua/media/shows/PNTR/PNTR-cover.jpg","background":"https://cdn.hope.ua/media/defaults/show-background.jpg"},"code":"PNTR"},"episode":{"uid":"PNTR02613","title":"Программа № 35 — Книга Иисуса Навина (3)","description":"Чью землю захватывали Израильтяне? Что книга Иисуса Навина говорит о следственном суде? И чем он хорош? Как в Писании представлена идея справедливости? Как Господь предостерегает Свой народ от формального подхода в служении Ему? Какое значение имеет любовь во взаимоотношениях с Богом? Каким образом Господь в точности исполнил обетование, данное Аврааму?","language":"ru","image":"https://cdn.hope.ua/media/shows/PNTR/episodes/02613/PNTR02613-cover.jpg","code":"PNTR02613"}},{"id":"5809f6da3e12111000b36471","date":"2016-10-24T09:30:00.000Z","show":{"uid":"LLCU","title":"Лома линда 360°","description":{"short":"Для Бога безвыходных ситуаций нет!"},"images":{"cover":"https://cdn.hope.ua/media/shows/LLCU/LLCU-cover.jpg","background":"https://cdn.hope.ua/media/shows/LLCU/LLCU-background.jpg"},"code":"LLCU"},"episode":{"uid":"LLCU00109","title":"Следы неизвестного","description":"Эфиопы — прекрасные люди. Несмотря на безнадежные ситуации, через которые им приходится проходить, они все равно излучают любезность, имеют чувство гордости, и решают свои дела так, как могут.","language":"ru","image":"https://cdn.hope.ua/media/shows/LLCU/episodes/00109/LLCU00109-cover.jpg","code":"LLCU00109"}},{"id":"5809f6da3e12111000b3647f","date":"2016-10-24T18:10:00.000Z","show":{"uid":"NSCU","title":"Непростое состояние","description":{"short":"Построй свою семью правильно!"},"images":{"cover":"https://cdn.hope.ua/media/shows/NSCU/NSCU-cover.jpg","background":"https://cdn.hope.ua/media/shows/NSCU/NSCU-background.jpg"},"code":"NSCU"},"episode":{"uid":"NSCU01914","title":"Благодарность и здоровье","description":"Говорят, благодарность способна сделать нашу жизнь приятней и радостней. Кроме того чувство благодарности способствует успеху в жизни. Из «спасибо» ведь шубу не сошьешь — есть такая народная пословица. Как благодарность по отношению к другим влияет на качество нашей жизни? Тема нашей  программы — благодарность.","language":"ru","image":"https://cdn.hope.ua/media/shows/NSCU/episodes/01914/NSCU01914-cover.jpg","trailers":{"today":{"local":{"url":"https://cdn.hope.ua/media/shows/NSCU/episodes/01914/NSCU01914-trailer-today.mov"}},"main":{"local":{"url":"https://cdn.hope.ua/media/shows/NSCU/episodes/01914/NSCU01914-trailer-main.mov"}}},"code":"NSCU01914"}}]';
        const liveItems = JSON.parse(liveData);
        const liveUrl = 'https://live-tv.hope.ua/nadia-publish/smil:nadia.smil/playlist.m3u8';

        return (
            <div>
                <Helmet { ...Seo.Home }/>
                <Live
                    mediaType={ browser.mediaType }
                    items={ liveItems }
                    url={ liveUrl }
                    currentTime="2016-10-24T09:23:30.000Z"
                />
                <Episodes
                    mediaType={ browser.mediaType }
                    items={ items }
                    title={ "Новые выпуски" }
                    dynamic={ false }
                    canRefresh={ false }
                />
            </div>
        );
    }
}
