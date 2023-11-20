import './App.css';
import List from './components/List';

function App() {
  const users = [
    {
      id: 0,
      name: 'João da Silva'
    },
    {
      id: 1,
      name: 'José Sousa'
    },
    {
      id: 2,
      name: 'Fernando Silveira'
    },
    ,
    {
      id: 3,
      name: 'Roberto Gonçalves'
    }    
  ];


  return (
    <div>
      <List items={users} />
    </div>
  );
}

export default App;
