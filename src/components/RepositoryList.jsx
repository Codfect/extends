import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from 'react';

import '../styles/repositories.scss';

const repository = {
  name: 'unform',
  description: 'Forms React',
  link: 'https://www.github.com'
}

/// https://api.github.com/users/codfect
/// https://pokeapi.co/api/v2/pokemon/

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/codfect/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])


  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}/>
        })}
      </ul>
    </section>
  );
}