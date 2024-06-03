import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'

const Home = () => {
    return (
        <Link to="/Inicio">
        <img src={logo} alt='logo' width="100" />
        </Link>
    )
}

export default Home