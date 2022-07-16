import { SearchIcon } from '@heroicons/react/solid'
import { useState } from 'react'

export default () => {

    const [aberto, estado] = useState(false)

    return (

<div className='container_pesquisar'>
    <SearchIcon onClick={()=> estado(!aberto)} className='searchIcon' /> 

    {
    aberto && 
    <input className='input' type="search" placeholder='Filmes, séries, e mais...'/>
    }

</div>
    )
}
