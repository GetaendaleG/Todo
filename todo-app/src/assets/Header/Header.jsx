import logo from '/logo.png';
import './Header.css';
function Header(){
    return(
        <header>
            <img src={logo} alt="todo-logo" />
            <h1>Todo App</h1>
        </header>
    )
}

export default Header;