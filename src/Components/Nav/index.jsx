import "./style.css"

function Nav({title}) {

    return (
        <nav className="nav" >
      
            <div>
                <h3 role="navbarH3">{title}</h3>
            </div>

        </nav>

    );
}
export default Nav