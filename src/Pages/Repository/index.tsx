import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../Services/Api';

import logoImg from '../../assets/logogithub.svg';

import { Header, Logo, RepositoryInfo, Issues } from './styles';

interface RepositoryParam {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParam>();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });

    // async function loadRepositories(): Promise<void> {
    //   const [repo, issue] = await Promise.all([
    //     api.get(`repos/${params.repository}`),
    //     api.get(`repos/${params.repository}/issues`),
    //   ]);

    //   setRepository(repo);
    //   setIssues(issue)
    // }

    // loadRepositories();
  }, [params.repository]);

  return (
    <>
      <Header>
        <Logo src={logoImg} alt="GitHub" />
        <Link to="/">
          <FiChevronLeft size={24} />
          voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <h2>{repository.full_name}</h2>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a target="blank" key={issue.id} href={issue.html_url}>
            <article>
              <div>
                <h2>{issue.title}</h2>
                <p>{issue.user.login}</p>
              </div>

              <FiChevronRight size={50} />
            </article>
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
