import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

const Home = () => {
  const [search, setSearch] = useState('');
  const [filmes, setFilmes] = useState([]);

  useEffect(() => { 
    const params = {};
    if (search) {
      params.nome_like = search;
    }

    api.get(`/filmes`, {params})
      .then(res => {
          setFilmes(res.data);
      })      
      .catch(error => {
        console.log(error);
      });

  }, [search]);

  return (
    <>
      <section>
        <input 
          type="search" 
          placeholder="Buscar" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
        <div id="content">
            {filmes.map(filme => (
              <li key={filme.id}>
                <img src={filme.imagem} alt="imagem"/>
                <h2>{filme.nome}</h2>
                <p>{filme.descricao}</p>
                <strong>{filme.diretor}</strong>
                <p>{filme.lancamento}</p>
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </li>
            ))}
        </div>
      </section>
    </>
  );
}

export default Home;