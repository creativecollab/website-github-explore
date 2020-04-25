import React, { useState, useEffect, FormEvent } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './styles';
import api from '../../Services/Api';

import logo from '../../assets/logogithub.svg';
import Repository from '../Repository';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [addRepo, setAddRepo] = useState('');
  const [inputErro, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleRepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    if (!addRepo) {
      setInputError('Digite o nome do autor/repositorio');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${addRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setAddRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca do repositorio :-/');
    }
  }

  return (
    <>
      <img src={logo} alt="GitExplored" />
      <Title>Explore Repositorios no GITHUB</Title>

      <Form hasError={!!inputErro} onSubmit={handleRepository}>
        <input
          type="text"
          placeholder="Digite um Repositorio"
          value={addRepo}
          onChange={e => setAddRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputErro && <Error>{inputErro}</Error>}

      <Repositories>
        {repositories.map(reporitory => (
          <a key={reporitory.full_name} href="/teste">
            <article>
              <img src={reporitory.owner.avatar_url} alt="Creative Collab" />
              <div>
                <h2>{reporitory.owner.login}</h2>
                <p>{reporitory.description}</p>
              </div>

              <FiChevronRight size={50} />
            </article>
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
