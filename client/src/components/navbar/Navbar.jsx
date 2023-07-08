import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
    const user = false;
    return (
        <nav className="nav-bar">
            <div className="navLeft">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-twitter"></i>
                <i className="fa-brands fa-square-instagram"></i>
            </div>
            <div className="navCenter">
                <div className="nav-list">
                    <ul>
                        <li className="nav-item"><Link to="/" className="nav-link">Início</Link></li>
                        <li className="nav-item"><Link to="/settings" className="nav-link">Conta</Link></li>
                        <li className="nav-item"><Link to="/register" className="nav-link">Contato</Link></li>
                        <li className="nav-item"><Link to="/write" className="nav-link">Criar</Link></li>
                        <li className="nav-item">{user && "Log Out"}</li>
                    </ul>
                </div>
            </div>
            <div className="NavRight">
                { 
                user ? (
                <img src="https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="/>
                ) : 
                (
                    <>
                        <ul>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Log in
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">
                                    registrar
                                </Link>
                            </li>
                        </ul>
                    </>
                )
                }
                <i className="Search-icon fa-solid fa-magnifying-glass"></i>
            </div> 
        </nav>
    )
}