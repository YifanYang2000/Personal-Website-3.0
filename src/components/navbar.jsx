import './navbar.css';

const Navbar = () => {

    return (
        <div className="Navbar">
            <div className='logo'>
                <a href="yifanyang.ca">YIFAN<br/><span>YANG</span></a>
            </div>
            <div>
                <ul className='categories-list'>
                    <li><span className='categories'>. skills( )</span></li>
                    <li><span className='categories'>. portfolio( )</span></li>
                    <li><span className='categories'>. work( )</span></li>
                    <li><span className='categories'>. contact( )</span></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
