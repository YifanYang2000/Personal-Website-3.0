import {
    faLinkedinIn,
    faGithub,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="logo">
                <a href="yifanyang.ca">
                    <span className="yifan">YIFAN</span><br/>
                    <span className="yang">YANG</span>
                </a>
            </div>
            <div className="nav-wrapper">
                <div>
                    <ul className="categories-list">
                        <li><span className='categories'>. about( )</span></li>
                        <li><span className='categories'>. skills( )</span></li>
                        <li><span className='categories'>. portfolio( )</span></li>
                        <li><span className='categories'>. contact( )</span></li>
                    </ul>
                </div>
                <div className="social-buttons">
                    <a href="https://www.linkedin.com/in/yifanyang2000/" className="social">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="https://github.com/YifanYang2000" className="social">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.instagram.com/yifan.sheep/" className="social">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
