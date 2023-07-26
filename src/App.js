import logo from './logo.svg';
import './App.css';


const Book = ({title, author}) => {
return (
  <div className="bookInfo">
    <h1>{title}</h1>
    <h3>{author}</h3>
  </div>
)
}

function App(props) {
  return (
 <div className="App">
    <Book
      title={"Divergent"}
    />

    <Book
      title={"insurgent"}
    />


    <Book
      title={"Allegent"}
      author={'Veronica Roth'}
    />
  

 </div>
  );
}

export default App;
