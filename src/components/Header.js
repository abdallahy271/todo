import React, {useState, useEffect} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import logo from "../images/in-focus.png";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

function Header() {
    const history = useHistory();
    const [isPlanHovered, setIsPlanHovered] = useState(false);
    const [isGoalHovered, setIsGoalHovered] = useState(false);
    const [isPlanClicked, setIsPlanClicked] = useState(false);
    const [isGoalClicked, setIsGoalClicked] = useState(false);

    const [tripleDot, setTripleDot] = useState(false);
    const changeClass = tripleDot ? 'change' : ''
    const [showTripleDot, setShowTripleDot ] = useState(false)
    const [navDisplay, setNavDisplay] = useState(true);
    const [pageClass, setPageClass] = useState("");

    function getPageName(url) {
        var index = url.lastIndexOf("/") + 1;
        var filenameWithExtension = url.substr(index);
        var filename = filenameWithExtension.split(".")[0]; // <-- added this line
        return filename;                                    // <-- added this line
    }

    
    const navBar = () => (
        <div className="header__nav">
                <div className={`header__option ${pageClass === 'plan' ? 'plan' : ''}`}>
                <Link to='/plan'>
                    <span className="header__optionLineTwo">
                        Daily Plan
                    </span>
                </Link>
                </div>

                <Dropdown className={`drop ${pageClass === 'goals' ? 'plan' : ''}`}
             onMouseEnter={() => setIsGoalHovered(true)}
             onMouseLeave={() => setIsGoalHovered(false)}
            //  onToggle={() => setIsGoalClicked(!isGoalClicked)}
             onClick={() => history.push('/goals')}
             show={isGoalClicked || isGoalHovered}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Goals
                </Dropdown.Toggle>

                <Dropdown.Menu id="dropdown-wrapper">
                    <Dropdown.Item className="dropdown-link" href="#/action-1">Daily Goals</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Weekly Goals</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Monthly Goals</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown> 

                <div className={`header__option ${pageClass === 'notes' ? 'plan' : ''}`}>
                <Link to='/notes'>
                        <span className="header__optionLineTwo">
                            Notes
                        </span>
                </Link>
                </div>

                
                <div className='header__option'>
                    <Link to='/journals'>
                        <span className="header__optionLineTwo">
                            Journal
                        </span>
                    </Link>
                </div>
                
                <div className={`header__option ${pageClass === 'book-list' ? 'plan' : ''}`}>
                    <a href='https://book-list-a2c1c.web.app/Home'>
                        <span className="header__optionLineTwo">
                            Book List
                        </span>
                    </a>
                </div>

                <div className='header__option'>
                    <a href='https://chat-app-f4581.web.app/'>
                        <span className="header__optionLineTwo">
                            Community
                        </span>
                    </a>
                </div>

                
            </div>
    )

    const tripleDotHandler = () => {
        setTripleDot(!tripleDot)
        setNavDisplay(!navDisplay)

    }

    const opener = () => (
        <div className="header__tripleDot">
            <div className={`container ${changeClass}`} onClick={tripleDotHandler}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    
    )

    function myFunction(x) {
        if (x.matches) { // If media query matches
          setTripleDot(false)
          setShowTripleDot(true)
          setNavDisplay(false)
        } else {
          setShowTripleDot(false)
          setNavDisplay(true)

        }
      }
      
      let x = window.matchMedia("(max-width: 627px)")
    useEffect(() => {
        myFunction(x)
        x.addListener(myFunction)
       
    }, [])
    
    useEffect(() => {
        let currentPageName = getPageName(window.location.pathname);
        console.log(currentPageName)
        setPageClass(currentPageName)
    }, [ window.location.pathname, pageClass])


    return (
        <div className='header'>
            <Link to='/' > 
                <img src={logo} alt="" className="header__logo"/>
            </Link>
            {navDisplay && navBar()}
            {showTripleDot && opener()}

       </div>
    )
}

export default Header