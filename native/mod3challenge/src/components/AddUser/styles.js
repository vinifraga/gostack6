import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBox = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  height: 200;
  border-radius: 3;
  margin-left: 15;
  margin-right: 15;
  padding-top: 20;
  padding-left: 15;
  padding-right: 15;
  padding-bottom: 15;
  background-color: #fff;
`;

export const UserInput = styled.TextInput`
  flex: 1;
  height: 60;
  border-width: 1;
  border-color: #ccc;
  margin-top: 20;
  margin-bottom: 10;
  padding-left: 15;
  border-radius: 3;
`;

export const DivButtons = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const CancelButton = styled.TouchableOpacity`
  flex: 1;
  padding-top: 10;
  padding-bottom: 10;
  background-color: ${colors.light};
  align-items: center;
  justify-content: center;
  border-radius: 3;
  margin-right: 5;
`;

export const ConfirmButton = styled.TouchableOpacity`
  flex: 1;
  padding-top: 10;
  padding-bottom: 10;
  background-color: ${colors.success};
  align-items: center;
  justify-content: center;
  border-radius: 3;
  margin-left: 5;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
