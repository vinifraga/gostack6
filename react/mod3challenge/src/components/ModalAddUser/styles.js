import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 270px;
    display: flex;
    flex-direction: column;
    input {
      margin: 22px 0 10px;
      padding: 12px 18px;
      border-radius: 5px;
      border: 1px solid #e0e0e0;
    }
    div {
      display: flex;
      justify-content: space-between;
      button#cancel {
        width: 130px;
        background: #cccccc;
        border-style: none;
        border-radius: 5px;
        color: #fff;
        padding: 15px 35px;
        font-weight: bold;

        &:hover,
        &:focus {
          background: #999999;
        }
      }
      button#submit {
        width: 130px;
        border-style: none;
        background: #85c47c;
        border-radius: 5px;
        color: #fff;
        padding: 15px 35px;
        font-weight: bold;

        &:hover,
        &:focus {
          background: #519e47;
        }
      }
    }
  }
`;

export const ModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: 'rgba(0,0,0,0.7)',
  },
};
