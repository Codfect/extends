export function RepositoryItem(props) {
  return(
    <li>
      <strong>{props.repository?.name ?? 'Default name'}</strong>
      
      <p>{props.repository?.description ?? 'Default desciption'}</p>

      <a href={props.repository?.link ?? 'Default link'}>
        Acessar repositório
      </a>
    </li>
  );
}