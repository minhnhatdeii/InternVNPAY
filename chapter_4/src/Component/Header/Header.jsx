import React from 'react'
import './Header.css'
import { useTranslation } from 'react-i18next';
export default function Header({text}) {
    const { t } = useTranslation();

  return (
    <div className="header">
      {t(`${text}`)}
    </div>
  )
}
