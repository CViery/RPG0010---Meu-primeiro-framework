import React, { useState, useEffect } from 'react';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

function LinhaLivro({ livro, excluir }) {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  const handleExcluir = () => {
    excluir(livro.codigo);
  };

  return (
    <tr>
      <td>{livro.título}</td>
      <td>{nomeEditora}</td>
      <td>
        <button className="btn btn-danger" onClick={handleExcluir}>
          Excluir
        </button>
      </td>
    </tr>
  );
}

function LivroLista() {
  const controleLivro = new ControleLivro();
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setLivros(controleLivro.obterLivros());
    setCarregado(true);
  }, [carregado]);

  const excluirLivro = (codigo) => {
    controleLivro.excluir(codigo);
    // Atualiza o estado dos livros após a exclusão
    setLivros([...controleLivro.obterLivros()]); // Cria um novo array para atualizar o estado
    setCarregado(false); // Força o recarregamento da lista
  };

  return (
    <main className="container mt-4">
      <h1 className="mb-4">Lista de Livros</h1>
      <table className="table">
        <thead style={{ backgroundColor: 'black', color: 'white' }}>
          <tr>
            <th>Título</th>
            <th>Editora</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluirLivro} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default LivroLista;