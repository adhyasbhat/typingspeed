import icon from '../../Images/icon.png'
import './header.css'
function Header(){
    return(
        <div className="d-flex justify-content-between mx-4 mt-2">
            <div className="iconDiv"><img className='icon' src={icon} alt="" /></div>
            <div className="titleDiv ">
                <h1>Fast Fingers</h1>
                </div>
        </div>
    )
}
export default Header