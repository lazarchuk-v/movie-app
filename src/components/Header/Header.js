import React, {useEffect, useRef} from 'react';
import logo from '../../assets/logo.png'
import {Link, useLocation} from "react-router-dom";
import './Header.scss'

// Список елементів навігації
const headerNavigation = [
    {
        display: 'Домашня',
        path:'/'
    },
    {
        display: 'Фільми',
        path: '/movies'
    },
    {
        display: 'Телебачення',
        path: '/tv'
    }
]

const Header = () => {
    // Отримуємо поточний маршрут
    const { pathname } = useLocation()

    // Створюємо посилання на DOM-елемент
    const headerRef = useRef(null)

    // Знаходимо індекс активного елемента навігації
    const active = headerNavigation.findIndex(e => e.path === pathname)

    useEffect(() => {
        // Функція для зміни вигляду хедера при прокрутці сторінки
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        // Додаємо слухача події 'scroll' до вікна
        window.addEventListener('scroll', shrinkHeader);

        // При знищенні компоненти видаляємо слухача події 'scroll'
        return () => {
            window.removeEventListener('scroll', shrinkHeader)
        }
    }, []);

    return (
        // Основний контейнер компоненти з посиланням на DOM-елемент
        <div ref={headerRef} className={'header'}>
            <div className={'header__wrap container'}>
                <div className={'logo'}>
                    {/* Логотип додатку */}
                    <img src={logo} alt="MovieApp logo"/>

                    {/* Посилання на домашню сторінку */}
                    <Link to={'/'}>TMDBest</Link>
                </div>

                {/* Навігаційне меню */}
                <ul className="header__nav">
                    {
                        // Генеруємо пункти меню зі списку елементів навігації
                        headerNavigation.map((e, i)=>(
                            <li key={i} to className={`${i === active ? 'active' : ''}`}>

                                {/* Посилання на маршрут зі списку елементів навігації */}
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

// Експортуємо компоненту
export {
    Header
};
