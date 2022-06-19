import { Link } from 'react-router-dom'
import './css/cabecalho.css'
import Logo from '../assets/logo_danflix.png'
import { SearchIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import Capa from '../assets/eu.jpg'


export default () => {

    const [aberto, estado] = useState(false)
   
return (

<section className='cabecalho'>
    
    <div className="icones">
        <img className='logo' src={Logo} alt="logo Danflix" />
        <Link style={{ textDecoration: 'none' }} to="/"><p className='icone'>Home</p></Link>
        <Link style={{ textDecoration: 'none' }} to="/filmes"><div className='icone'>Filmes</div></Link>
        <Link style={{ textDecoration: 'none' }} to="/series"><div className='icone'>Séries</div></Link>
        <Link style={{ textDecoration: 'none' }} to="/documentarios"><div className='icone'>Bombando</div></Link>
    </div>
    
    <div className='container_pesquisar'>
        <SearchIcon onClick={()=> estado(!aberto)} className='searchIcon' /> 

        {
        aberto && 
        <input className='input' type="text" placeholder='Pesquisar'/>
        }

        <img src={Capa} alt="capa" className='login'/>
    </div>

</section>

)}
        
    