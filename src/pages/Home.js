import React from 'react'
import { useTranslation } from 'react-i18next';


function Home() {

  const {t} = useTranslation()

  return (
    <div class="alert alert-success" role="alert">
      <h1>{t('para.home')} </h1>
    </div>
  )
}

export default Home