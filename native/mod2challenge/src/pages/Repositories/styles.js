import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    paddingTop: 15,
    paddingHorizontal: metrics.basePadding,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: metrics.baseRadius * 2,
    flex: 1,
    paddingLeft: 15,
    marginRight: 15,
    height: 50,
  },
  add: {
    color: colors.black,
    width: 20,
    fontSize: 14,
  },
  list: {
    marginTop: 15,
  },
  vazio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textVazio: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 20,
  },
});

export default styles;
