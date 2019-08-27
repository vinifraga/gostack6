import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.basePadding,
    paddingTop: metrics.basePadding,
    paddingBottom: 35,
    backgroundColor: colors.lighter,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding * 2,
    backgroundColor: colors.light,
    borderRadius: metrics.baseRadius,
    height: 35,
    color: colors.lighter,
  },
  selected: {
    fontWeight: 'bold',
  },
  list: {
    marginTop: 10,
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
