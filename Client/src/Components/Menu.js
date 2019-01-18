import React from 'react'

export default function menu() {
    return (
        <aside className="menu">
            <ul className="menu__list">
                <h2 className="menu__title">Almost a menu</h2>
                <li className="menu__item active">
                    <img src="img/icons/mailbox.png" className="menu__item--icon"/>
                    Mailbox
                </li>
                <li className="menu__item">
                    <img src="img/icons/important.png" className="menu__item--icon"/>
                    Your favorites
                </li>
                <li className="menu__item">
                    <img src="img/icons/sleep.png" className="menu__item--icon"/>
                    Important
                </li>
                <li className="menu__item">
                    <img src="img/icons/to-do.png" className="menu__item--icon"/>
                    To do
                </li>
                <li className="menu__item">
                    <img src="img/icons/lazzy.png" className="menu__item--icon"/>
                    I'm to lazy to do
                </li>
            </ul>
        </aside>
    )
}