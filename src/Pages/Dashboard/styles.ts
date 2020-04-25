import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 15em;
  line-height: 50px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 45em;
  display: flex;

  input {
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
    height: 70px;
    border: 0;
    border-radius: 5px 0 0 5px;
  }

  button {
    height: 70px;
    width: 200px;
    background-color: #04d361;
    font-weight: bold;
    border: 0;
    border-radius: 0 5px 5px 0;
    transition: backround-color 2s;
    color: #fff;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.section`
  max-width: 45em;
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

      img {
        width: 200px;
        height: 200px;
        border-radius: 8px;
      }

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
