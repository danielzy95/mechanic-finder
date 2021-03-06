import React from 'react';

import Separator from './Separator';

import { FaFacebookOfficial, FaTwitter, FaGooglePlus, FaInstagram,
         FaYoutubePlay, FaPinterest, FaLinkedin  } from 'react-icons/fa';

import styles from './Footer.css';

const PrimarySection = props => (
  <div className={styles["primary-section"]}>
    <h4 style={{ marginBottom: 0 }}>{props.title}</h4>
    <Separator marginTop={5} color="#37454d" width={2} />
    {props.children}
  </div>
);

const Footer = props => (
  <footer className={styles.root}>
    <div className={styles.primary}>
      <div>
        <div className={styles.newsletter}>
          <p>Quieres recibir nuestras ofertas? Suscribete a nuestro newsletter!</p>
          <div className={styles["newsletter-form"]}> 
            <input type="text" placeholder="Correo Electronico" />
            <button>Suscribete</button>
          </div>
        </div>
        <Separator className={styles["newsletter-separator"]} color="#697379" width={2} />
        <div className={styles.primaries}>
          <PrimarySection title="Nuestra Empresa">
            <p>Empresa</p>
            <p>Trabajos</p>
            <p>Carreras</p>
            <p>Prensa</p>
            <p>Inversionistas</p>
          </PrimarySection>
          <PrimarySection title="Contactanos">
            <div className={styles.social}>
              <FaFacebookOfficial />
              <FaTwitter />
              <FaInstagram />
              <FaGooglePlus />
              <FaYoutubePlay />
              <FaPinterest />
              <FaLinkedin />
            </div>
          </PrimarySection>
        </div>
      </div>
    </div>
    <div className={styles.secondary}>
      <ul className={styles.appendix}>
        <li>Terminos y Condiciones</li>
        <li>Informacion Legal</li>
        <li>Politica de Privacidad</li>
        <li>Politica de Cookies</li>
        <li>Mapa del Sitio</li>
        <li>Centro de Apoyo</li>
      </ul>
      <h2 className={styles.logo}>Mechanic Finder</h2>
      <div className={styles.copyrights}>
        Copyright 2017 MechanicFinder | Derechos Reservados
      </div>
    </div>
  </footer>
);

export default Footer;