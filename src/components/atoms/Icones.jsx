import Logo from '../../assets/logo_danflix.png'
import { Link } from 'react-router-dom'

export default () => 
 
<div className="icones">
    <img className='logo' src={Logo} alt="logo Danflix" />
    <Link style={{ textDecoration: 'none' }} to="/"><p className='icone'>Home</p></Link>
    <Link style={{ textDecoration: 'none' }} to="/filmes"><div className='icone'>Filmes</div></Link>
    <Link style={{ textDecoration: 'none' }} to="/series"><div className='icone'>Séries</div></Link>
    <Link style={{ textDecoration: 'none' }} to="/documentarios"><div className='icone'>Bombando</div></Link>
</div>