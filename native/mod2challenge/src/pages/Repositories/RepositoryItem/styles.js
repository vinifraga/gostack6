import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: metrics.baseRadius,
    marginBottom: 10,
  },
  info: {
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  repoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  orgName: {
    fontSize: 16,
    color: colors.regular,
  },
  more: {
    color: colors.light,
    fontSize: 10,
  },
});

export default styles;
