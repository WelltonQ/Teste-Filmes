import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

const Details = () => {
  const[filmes, setFilmes] = useState([]);
  const { id } = useParams();

  useEffect(() => { 
    api.get(`/filmes/${id}`)
      .then(res => {
          setFilmes(res.data);
      })      
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <Header />
        <section>
          <div>
            <img src={filmes.imagem} alt="imagem"/>
            <h2>{filmes.nome}</h2>
            <p>{filmes.descricao}</p>
            <strong>{filmes.diretor}</strong>
            <p>{filmes.lancamento}</p>
          </div>
        </section>
      <Footer />
    </>
  );
}

export default Details;