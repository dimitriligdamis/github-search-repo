// == Import : npm
import { createRoot } from 'react-dom/client';

import 'src/styles/index.scss';
import 'semantic-ui-css/semantic.min.css';

// == Import : local
// Composants
import App from 'src/components/App';
import { BrowserRouter } from 'react-router-dom';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <BrowserRouter>
    <App />;
  </BrowserRouter>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const root = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootReactElement);
