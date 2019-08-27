import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: metrics.basePadding,
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
  issueTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    maxWidth: metrics.screenWidth - (metrics.basePadding * 4 + 50 + 10 + 7 + 30),
  },
  authorName: {
    fontSize: 16,
    color: colors.regular,
  },
  more: {
    color: colors.light,
    fontSize: 10,
  },
});

export default styles;
