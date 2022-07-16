import '../css/cabecalho.css'
import Capa from '../../assets/eu.jpg'
import Icones from '../atoms/Icones'
import SearchBar from '../atoms/SearchBar'

export default () => 

<section className='cabecalho'>
    
    <Icones />    
    <SearchBar />
    <img src={Capa} alt="capa" className='login'/>

</section>
        
    