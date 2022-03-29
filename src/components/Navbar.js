import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useTranslation } from 'react-i18next'

function Navbar() {
    const {t, i18n} = useTranslation()

    const onChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    useEffect(() => {
        for (let index = 0; index < document.getElementsByClassName('lang').length; index++) {
            const element = document.getElementsByClassName('lang')[index];
            // console.log(element);
            if(element.value === i18n.language){
                element.setAttribute("selected", "true")
            }
        }
    }, []);

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">i18next</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">
                                {t('menu.home')}
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">
                                {t('menu.contact')}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    <select class="form-select" aria-label="Default select example" onChange={onChangeLanguage}>
                        <option value="en" className="lang">En</option>
                        <option value="fr" className="lang">Fr</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default Navbar