import React from 'react'
import { Button } from '../Button/Button'
import logoImage from '../Nav/logo.png'
import { Link, animateScroll as scroll} from 'react-scroll'
import Swal from 'sweetalert2'
import './Footer.css'

function Footer() {

  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Suscribite a nuestra newsletter para recibir 
                información de los mejores psicólogos
            </p>
            <p className="footer-subscription-text">
                Podes cancelar la suscripción desde tu perfíl.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name='email' placeholder='Su email...' className="footer-input" />
                    <Button type='submit' buttonStyle='btn--outline'
                    onClick={() => 
                      Swal.fire(
                      '¡Gracias por suscribirte!',
                      '',
                      'success'
                    )
                    }
                    >Suscribite</Button>
                    <div className="form-container">
                    <input type="checkbox"/> <p>Si, estoy de acuerdo en recibir novedades de PsicoApp.</p>
                    </div>
                </form>
            </div>
        </section>
        <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>NOSOTROS</h2>
            <Link to='about' 
            smooth={true} 
            offset={50} 
            duration={700} 
            >
            Acerca
            </Link>
            <Link to='testimonios' 
            smooth={true} 
            offset={50} 
            duration={700} 
            >
            Testimonios
            </Link>
            <a href='/psico'>Psicólogos</a>
            <Link to='pricing' smooth={true} offset={50} duration={700}>Precios</Link>
          </div>
          <div class='footer-link-items'>
            <h2>CONTACTANOS</h2>
            <a href='/contacto'>Formulario</a>
            <a>Telefono:</a>
            <a>+54 9 11 51467589</a>
            <a>Correo:</a>
            <a>soporte@psicoapp.com</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>SOCIAL</h2>
            <a href='https://www.instagram.com/'>Instagram</a>
            <a href='https://www.facebook.com/'>Facebook</a>
            <a href='https://www.youtube.com/'>Youtube</a>
            <a href='https://www.twitter.com/'>Twitter</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            {/* <a href='/' className='social-logo'>
              <img src={logoImage} alt="logo image" width='250rem' />
            </a> */}
          </div>
          <small class='website-rights'>Copyright © 2022 PsicoApp - Todos los derechos reservados.</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.twitter.com/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer