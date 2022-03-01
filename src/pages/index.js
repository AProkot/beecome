import * as React from "react"

import '../styles.css'
import shtab from '../images/shtab.jpg';
import photoBD from '../images/bee.png';
import party from '../images/bee.png';

import items from '../items';

const SpeakerInfo = ({ title, author, jobTitle, description, photo, isTop = false }) => (
    <div className={'speaker mt-48'}>
      <div className="speaker__info">
        <div className="speaker__img-wrapper">
          <div className="speaker__img">
            <img src={photo} alt=""/>
          </div>
          {isTop && <img src={party} alt="" className={'top-img'}/>}
        </div>
        <div className={'speaker__text'}>
          <p className={'speaker__author'}>
            {author}
            {isTop && <span className={'top-badge'}>TOP speaker</span>}
          </p>
          {jobTitle && <p className={'speaker__job-title'}>{jobTitle}</p>}
        </div>
      </div>
      <h3 className={'speaker__title'}>{title}</h3>
      <p className={'speaker__description'}>
        {
          description
              ?
              description
              :
              'Этот спикер пока не предоставил описание своего доклада. Возможно, оно появится здесь позже, а возможно он сохранит его в тайне.'
        }
      </p>
    </div>
)


// markup
const IndexPage = () => {
  let [answer, setAnswer] = React.useState('');

  return (
      <>
        <div className="preview-img" />
        <main className={'main'}>
          <title>BEE-COME Conf 2022</title>
          <section className={'section'}>
            <h1 className={'section__title'}>
              Поздравляем
              <br />
              <span className={'text-accent'}>— теперь ты на шаг ближе к BEE-COME Conference!</span>
              <br />
              <span role="img" aria-label="Party popper emojis">
              🐝🐝🐝
            </span>
            </h1>
            <div>
              <p className={'abbr'}><span className={'abbr_color'}>BEE</span> — Будь</p>
              <p className={'abbr'}><span className={'abbr_color'}>COME</span> — Комом</p>
            </div>
            <a href={'#form'} className={'button mt-48'}>Хочу на BEE-COME</a>
          </section>
          <section className={'section mt-96'}>
            <h2 className={'title'}>Почему я здесь?</h2>
            <p className={'text'}>
              Если вы получили эту ссылку, значит вы были отобраны для&nbsp;участия в <span className={'text-accent'}>BEE-COME 2022</span>
              {" "}
              <span role="img" aria-label="Sunglasses smiley emoji">
              😎
            </span>
              <br /><br />
              Наш высокопрофессиональный оргкомитет долго, тщательно и с особым вниманием к деталям отбирает самых лучших
              ̶л̶ю̶д̶е̶й̶ ̶с̶т̶р̶а̶н̶ы̶, преодолевших все тяготы агитации, прошедших огонь, воду и ШКС, держащих на своих плечах заботу о бойцах и кандидатах.
              В этом году вам повезло и вы стали одним из этих счастливчиков! Естественно не просто так, а потому что вы действительно{' '}
              <span className={'text-accent'}>BEE-COME Specialist</span>.
              <br /><br />
              Вы можете зарегистрироваться сейчас или сначала <a href="#agenda" className={'text-accent'}>ознакомиться с программой</a>.
              <a href="#form" className={'button mt-48'}>Хочу регистрацию</a>
            </p>
          </section>
          <section className={'section mt-96'} id={'info'}>
            <h2 className={'title'}>Основная информация</h2>
            <ul className={'list-ul'}>
              <li className={'text'}>
                12 марта, 19:00
              </li>
              <li className={'text'}>
                каждый приглашённый спикер (или группа спикеров) представляет свою презентацию
              </li>
              <li className={'text'}>
                тематика, формат, длительность презентации — любая
              </li>
              <li className={'text text-accent'}>
                поддержка, апплодисменты, веселье и welcome-pack гарантированы!
              </li>
            </ul>
          </section>
          <section className={'section mt-96'} id={'agenda'}>
            <h2 className={'title'}>Программа</h2>
            <p className={'text'}>
              Пока мы не можем раскрыть все карты, но каждый день будем раскрывать по одному выступлению,
              чтобы было интереснее следить за наполнением конференции.
            </p>
            <div className="speakers-wrapper">
              {items.map(paper => <SpeakerInfo {...paper} />)}
            </div>
            <a href={'#form'} className={'button mt-48'}>Регистрация на BEE-COME</a>
          </section>
          <section className={'section mt-96'} id={'form'}>
            <h2 className={'title'}>Регистрация</h2>
            <p className={'text'}>
              Чтобы мы знали, что вы — именно тот, кто нам нужен — пожалуйста,{' '}
              <span className={'text-accent'}>ответьте на несколько вопросов</span>.
            </p>
            <div className={'question'}>
              { !answer &&
              <>
                <p className={'text mt-48 question__text'}>
                  Вы занимаете должность в комсоставе 2022?
                </p>
                <div className={'question__buttons'}>
                  <button className={'button mt-24'} onClick={() => setAnswer('komsostav')}>Да</button>
                  <button className={'button button_disabled mt-24'} disabled>Нет</button>
                </div>
              </>
              ||
              answer === 'komsostav' &&
              <>
                <p className={'text mt-48 question__text'}>
                  Штаб ГУ – лучший штаб?
                </p>
                <img src={shtab} alt="" className={'question__photo mt-24'}/>
                <div className={'question__buttons'}>
                  <button className={'button mt-24'} onClick={() => setAnswer('bestshtab')}>Да</button>
                  <button className={'button button_disabled mt-24'} disabled>Нет</button>
                </div>
              </>
              ||
              answer === 'bestshtab' &&
              <p className={'title'}>
                Поздравляем
                <br />
                <span className={'title text-accent'}>— вы участник BEE-COME&nbsp;Conference!</span>
                <br />
                <span role="img" aria-label="Party popper emojis">
                  🐝🐝🐝
                  </span>
                <img src={photoBD} alt="" className={'question__photo mt-24'}/>
                <a href={'#info'} className={'button mt-48'}>К основной инфе</a>
              </p>
              }
            </div>
          </section>
        </main>
        <footer className={'section footer'}>
          <p className={'footer__text'}>
            По всем вопросам и предложениям
            <br />
            обращаться к координаторам:{' '}
          </p>
          <ul className={'list-ul footer__list'}>
            <li className={'text'}>
              <a href="https://vk.com/club189256900" className={'footer__text_accent'}>VK</a>
            </li>
            <li className={'text'}>
              <a href="https://www.instagram.com/so_spbu/" className={'footer__text_accent'}>Instagram</a>
            </li>
          </ul>
        </footer>
      </>
  )
}

export default IndexPage
