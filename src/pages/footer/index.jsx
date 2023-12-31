import React from 'react'
import footer from '../../styles/footer.module.css'
import Github from '../../assets/github.svg'
import Instagram from '../../assets/instagram.svg'
import Email from '../../assets/email.svg'

export const Footer = () => {
  return (
    <footer className={footer.footer}>

        <div className={footer.img}>
            <a className={footer.a} target='_blank' href='https://www.instagram.com/paulovitor.gif/'>
                <img src={Instagram}/>
                <p className={footer.p}>Instagram</p>
            </a>
        </div>

        <div className={footer.img}>
            <a className={footer.a} target='_blank' href='mailto:paulomenezes8499@gmail.com'>
                <img src={Email}/>
                <p className={footer.p}>Email</p>
            </a>
        </div>
        
        <div className={footer.img}>
            <a className={footer.a} target='_blank' href='https://github.com/T4l3s'>
                <img src={Github}/>
                <p className={footer.p}>Github</p>
            </a>
        </div>

    </footer>
  )
}
