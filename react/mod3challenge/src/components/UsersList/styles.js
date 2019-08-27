import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  margin: 20px 200px 20px 20px;
  width: 300px;
  border-radius: 5px;
  height: 900px;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.9;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 5px 0;

  div#vazio {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-weight: bold;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: 13px 0;
    margin: 0 18px;
    border-bottom: 2px solid #f4f4f4;
  }

  div#info {
    display: flex;
    align-items: center;

    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }

    div {
      padding-left: 16px;
      display: flex;
      flex-direction: column;
    }
  }

  div#icons {
    display: flex;
    align-items: center;

    i#close {
      color: #d55454;
      margin-right: 20px;

      &:focus,
      &:hover {
        color: #a42828;
      }
    }

    i#more {
      color: #9e9d9e;

      &:focus,
      &:hover {
        color: #747274;
      }
    }
  }
`;
