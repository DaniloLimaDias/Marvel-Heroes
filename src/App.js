import { GlobalStyle } from "./styles/index";

import Header from './components/header/header'
import  Card from './components/card/card'
function App() {
  return (
    <div>
      <GlobalStyle/>
        <Header/>
        <Card/>
    </div>
  );
}

export default App;
