import React from 'react'
import Styles from "../css/ContactInfoCard.module.css"
import toast from 'react-hot-toast'

export default function ContactInfoCard({ iconUrl, text, link, textToCopy }) {
    const onClickFunction = () => {
        if (link) {
            window.open(link)
        }
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy)
            toast.success('Discord Username Copied', {
                style: {
                  border: '1px solid #6792b9',
                  padding: '16px',
                },
                iconTheme: {
                  primary: '#6751b9',
                  secondary: '#FFFAEE',
                },
              })
        }
    }
    return (
        <div className={Styles.contactDetailsCard}>
            <div className={Styles.icon} onClick={onClickFunction}>
                <img src={iconUrl} alt={text} />
            </div>
            <p onClick={onClickFunction}>{text}</p>
        </div>
    )
}
