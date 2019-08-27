import Reactotron, { asyncStorage } from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.1.107' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(asyncStorage())
    .connect(); // let's connect!

  console.tron = tron;
  tron.clear();
}
