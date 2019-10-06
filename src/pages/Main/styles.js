import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    transition: ease 0.3s;
    border: ${(props) => (props.withError ? '2px solid #f00' : 0)};
  }

  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #41b883;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    transition: ease 0.2s;

    &:hover {
      background: #379d70;
    }
  }
`;
