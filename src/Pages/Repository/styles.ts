import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const Logo = styled.img``;

export const RepositoryInfo = styled.section`
  margin-top: 60px;

  header {
    display: flex;
    align-items: center;

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 30px;

      h2 {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 5px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        color: #737380;
        margin-top: 5px;
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 60px;
  a {
    width: 100%;
    background-color: #fff;
    display: block;
    padding: 20px;
    text-decoration: none;
    transition: transform 0.5s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 20px;
    }

    article {
      display: flex;
      align-items: center;

      div {
        margin-left: 20px;
        padding: 0;
        margin-top: 0;
        flex: 1;

        h2 {
          font-size: 1.4em;
          color: #3d3d4d;
        }

        p {
          font-size: 1.2em;
          color: #a8a8b3;
          margin-top: 4px;
          text-justify: auto;
        }
      }

      svg {
        margin-left: auto;
        margin: 0;
      }
    }
  }
`;
