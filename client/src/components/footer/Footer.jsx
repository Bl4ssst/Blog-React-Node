import React from "react";
import './Footer.css'

export default function Footer() {
    return (
        <footer>
        <div id="footer_content">
            <div id="footer_contacts">
                <h1>Logo</h1>
                <p>It's all about your dreams.</p>

                <div id="footer_social_media">
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-square-twitter"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                </div>
            </div>
            
            <ul class="footer-list">
                <li>
                    <h3>Blog</h3>
                </li>
                <li>
                    <a href="#" className="footer-link">Vida</a>
                </li>
                <li>
                    <a href="#" className="footer-link">Estilo</a>
                </li>
                <li>
                    <a href="#" className="footer-link">Tecnologia</a>
                </li>
            </ul>

            <ul class="footer-list">
                <li>
                    <h3>Produtos</h3>
                </li>
                <li>
                    <a href="#" className="footer-link">App</a>
                </li>
                <li>
                    <a href="#" className="footer-link">Desktop</a>
                </li>
                <li>
                    <a href="#" className="footer-link">Cloud</a>
                </li>
            </ul>

            <div id="footer_subscribe">
                <h3>Subscribe</h3>

                <p>
                    Adicione o seu email para receber atualizações
                    e novidades.
                </p>

                <div id="input_group">
                    <input type="email" id="" />
                    <button>
                        <i class="fa-regular fa-envelope"></i>
                    </button>
                </div>
            </div>
        </div>

        <div id="footer_copyright">
            &#169
            2023 all rights reserved
        </div>
    </footer>
    )
}