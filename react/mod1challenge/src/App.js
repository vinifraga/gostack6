import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';
import './style.css';

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.onStateUpdate();
  }

  onStateUpdate = () => {
    const posts = [
      {
        key: '1',
        img: 'perfil.jpeg',
        name: 'Vinícius Fraga',
        time: 'há 3 min',
        content: `Mauris ipsum dolor sit amet, cu cum modo nusquam. Nam at soluta dictas mentitum, viris
      moderatius ad eos, sea epicuri consulatu referrentur at. Cum et aliquam omittam evertitur, sed
      cu natum constituto, postea scriptorem quo et. Id aliquid fabellas eum. Et animal denique sit,
      temporibus comprehensam no pro. Pri tempor putent fuisset cu. Mei persius apeirian adipiscing
      ea, ius cu eius rebum graecis, sapientem adipiscing vis ei. Illud corrumpit at pro. No tation
      vidisse est, petentium mnesarchum percipitur te has, duo probo eligendi vivendum ea. Vel at
      luptatum postulant, no usu nonumy accusamus. Ne mei sententiae omittantur, cu quo solum
      impetus nominati.`,
      },
      {
        key: '2',
        img: 'gabi.png',
        name: 'Gabi Baliza',
        time: 'há 18 min',
        content: `Mauris ipsum dolor sit amet, cu cum modo nusquam. Nam at soluta dictas mentitum, viris
      moderatius ad eos, sea epicuri consulatu referrentur at. Cum et aliquam omittam evertitur, sed
      cu natum constituto, postea scriptorem quo et. Id aliquid fabellas eum. Et animal denique sit,
      temporibus comprehensam no pro. Pri tempor putent fuisset cu. Mei persius apeirian adipiscing
      ea, ius cu eius rebum graecis, sapientem adipiscing vis ei. Illud corrumpit at pro. No tation
      vidisse est, petentium mnesarchum percipitur te has, duo probo eligendi vivendum ea. Vel at
      luptatum postulant, no usu nonumy accusamus. Ne mei sententiae omittantur, cu quo solum
      impetus nominati.`,
      },
    ];
    posts.map(post => this.setState((state) => {
      const res = state.posts.concat(post);
      return { posts: res };
    }));
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <ul>
          {posts.map(post => (
            <li key={post.key}>
              <Post item={post} />
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
