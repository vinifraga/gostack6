import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  /* padding-bottom: 20px; */

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }

    img {
      width: 64px;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n -1) {
        background: #f5f5f5;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;

    button {
      border: 0;
      border-radius: 3px;
      width: 120px;
      height: 55px;
      margin: 5px 0;
      padding: 0 15px;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
    }

    button#update {
      background: #33ccff;

      &:hover {
        background: #00ace6;
      }
    }

    button#delete {
      background: #ff0000;

      &:hover {
        background: #b30000;
      }
    }
  }
`;
