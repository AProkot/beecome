import bee from './images/bee2.jpg';
import ann from './images/pro.jpg';
import sereja from './images/sereja.jpg';

export const items = [
    {
        title: 'Как всё успевать и другие вопросы на которые я не знаю ответа',
        author: 'Агент Пи',
        jobTitle: 'Доцент кафедры просроченных дедлайнов',
        description: '',
        photo: ann,
        isTop: true
    },
    {
        title: 'Почему бал не самое важное мероприятие СПбСО',
        author: 'Shisha',
        jobTitle: 'Выпусник академии горящих ж̶о̶п̶ сердец',
        description: '',
        photo: sereja,
        isTop: true
    },
    {
        title: 'Информация о докладе появится позже',
        author: 'Неизвестно',
        jobTitle: '',
        description: '',
        photo: bee,
        isTop: false
    }
]

export default items;