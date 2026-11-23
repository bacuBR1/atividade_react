import { useEffect, useState } from 'react';
import './App.css';

// Endpoint público que retorna um array JSON de usuários
const URL_API = 'https://jsonplaceholder.typicode.com/users';

// Componente que apresenta um usuário (recebe os dados por props).
function ItemUsuario({ nome, email, cidade }) {
  return (
    <li className="item">
      <strong>{nome}</strong>
      <span className="detalhe">{email}</span>
      <span className="detalhe">{cidade}</span>
    </li>
  );
}

// Componente que apresenta a lista de usuários.
function ListaUsuarios({ usuarios }) {
  return (
    <ul className="lista">
      {usuarios.map((usuario) => (
        <ItemUsuario
          key={usuario.id}
          nome={usuario.name}
          email={usuario.email}
          cidade={usuario.address.city}
        />
      ))}
    </ul>
  );
}


function App() {

  const [itens, setItens] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const resposta = await fetch(URL_API);

        if (!resposta.ok) {
          throw new Error(`Erro HTTP ${resposta.status}`);
        }

        const dados = await resposta.json();
        setItens(dados);
      } catch (e) {
        setErro(e.message);
      } finally {
        setCarregando(false);
      }
    }

    carregarUsuarios();
  }, []);

  let conteudo;

  if (carregando) {
    conteudo = <p className="mensagem">Carregando...</p>;
  } else if (erro) {
    conteudo = (
      <p className="mensagem erro">Não foi possível carregar os usuários: {erro}</p>
    );
  } else if (itens.length === 0) {
    conteudo = <p className="mensagem">Nenhum usuário encontrado.</p>;
  } else {
    conteudo = <ListaUsuarios usuarios={itens} />;
  }

  return (
    <div className="container">
      <h1>Lista de Usuários</h1>
      <p className="subtitulo">Total: {itens.length}</p>
      {conteudo}
    </div>
  );
}

export default App;
