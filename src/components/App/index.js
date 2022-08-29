// == Import
import githubLogo from 'src/assets/images/logo-github.png';
import './styles.scss';

import SearchBar from '../SearchBar';
import Message from '../Message';
import ReposResults from '../ReposResults';

// == Composant
function App() {
  return (
    <div className="App">
      <img className="App__logo" src={githubLogo} alt="github logo" />
      <SearchBar />
      <Message />
      <ReposResults />
    </div>
  );
}

// == Export
export default App;
