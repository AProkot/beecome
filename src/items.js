import bee from './images/bee2.jpg';
import ann from './images/ann.png';
import sereja from './images/seryoja.jpg';
import leva from './images/leva.png'
import tv from './images/tandv.png'

export const items = [
    {
        title: 'Оценка подобия СПбГУ и некоторого _другого_ государственного объединения',
        author: 'Агент Пи',
        jobTitle: 'Доцент кафедры просроченных дедлайнов',
        description: '',
        photo: ann,
        isTop: true
    },
    {
        title: 'Жители ГУ-лэнда',
        author: 'Dr. Shisha',
        jobTitle: 'Институт биологии развития РАБ',
        description: 'Разновидности бойцов и как правильно за ними ухаживать.',
        photo: sereja,
        isTop: true
    },
    {
        title: 'Принцип действия губозакаточной машинки',
        author: 'Лёвик',
        jobTitle: 'Кандидат мерчовых наук, специалист в области фикспрайса',
        description: 'Как мягко намекнуть бойцу, что вместо фейерверка, которого он хочет на меро, будут в лучшем случае бенгальские огни, и то не факт.',
        photo: leva,
        isTop: true
    },
    {
        title: 'Не «в мире животных»',
        author: 'УниCUM',
        jobTitle: 'Кандидаты в доктора выгоревших наук',
        description: '',
        photo: tv,
        isTop: true
    },
    {
        title: 'Здесь может быть ваш доклад',
        author: 'Здесь может быть ваше имя',
        jobTitle: '',
        description: '',
        photo: bee,
        isTop: false
    }
]

export default items;