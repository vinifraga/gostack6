import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default styles;

export const Container = styled.View`
  flex: 1;
`;

export const AvatarImage = styled.Image`
  height: 50;
  width: 50;
  border-radius: 25;
  border-width: 2;
  border-color: #fff;
`;

export const ModalAdd = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-left: 15;
  margin-right: 15;
`;
