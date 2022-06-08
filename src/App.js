import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './controllers/Home';
import Pemasukan from './controllers/Pemasukan';
import Pengeluaran from './controllers/Pengeluaran';
import Barang from './controllers/Barang';
import Editbarang from './controllers/EditBarang';
import EditPemasukan from './controllers/EditPemasukan';
import EditPengeluaran from './controllers/EditPengeluaran';
import About from './controllers/About.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Header />
        <Route exact path="/" component={Home} />

        <Route exact path="/Barang" component={Barang} />
        <Route path="/Barang/:id" component={Editbarang} />

        <Route exact path="/Pemasukan" component={Pemasukan} />
        <Route path="/Pemasukan/:id" component={EditPemasukan} />

        <Route exact path="/Pengeluaran" component={Pengeluaran} />
        <Route path="/Pengeluaran/:id" component={EditPengeluaran} />

        <Route exact path="/Tentang" component={About} />
      </div>
    </Router>
  );
}

export default App;
