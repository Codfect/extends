import { RepositoryItem } from "./RepositoryItem"

const repository = {
  name: 'unform',
  description: 'Forms React',
  link: 'https://www.github.com'
}

export function RepositoryList() {
  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem />
      </ul>
    </section>
  );
}