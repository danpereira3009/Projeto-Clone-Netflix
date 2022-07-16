import './css/index.css'
import Banner from '../assets/dexter.jpg'
import Carousel from '../components/templates/Carousel'

export default () => 

<section>
    
    <img src={Banner} alt="banner" className='banner' />    

    <div className='body'>
        <div class="d-nome__filme">
            <div class="d__danflix">D</div>
            <div class="nome__filme">S É R I E</div>
        </div>

        <h1 class="titulo">Dexter <br/> New Blood</h1>
        
        <p class="sinopse">Sinopse:<br/>
            Longe de sua vida antiga, Dexter se refugiou em uma pequena cidade <br/>
            e adotou uma identidade falsa. <br/>
            Ele leva uma vida tranquila até que um serial killer aparece no local, <br/>
            forçando-o a reviver seu antigo eu.
        </p>
        <p class="autor">
        Criação<br/>
        Clyde Phillips
        </p>
    </div>

    <Carousel />
</section>

