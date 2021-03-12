import React from 'react';
import {NavLink} from 'react-router-dom';
import contacts from './Contacts.module.css';

type ContactsPropsType = {
    title: Array<ContactsItemPropsType>
}
type ContactsItemPropsType = {
    id: string,
    nicName: string,
    avatar: string
    link: string
}

export function Contacts(props: ContactsPropsType) {

    return (
        <div className={contacts.content}>
            <h3>Contacts</h3>
            <ul className={contacts.list}>
                {
                    props.title.map(t => {
                        return (
                            <li className={contacts.listItem}>
                                <img className={contacts.avatar}
                                     src={t.avatar}
                                />
                                <NavLink className={contacts.link}
                                         activeClassName={contacts.active}
                                         to={t.link}>
                                    {t.nicName}
                                </NavLink>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );

}