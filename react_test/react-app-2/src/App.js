import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const Header = () => {
  return <header>
    <h1><a href="/">hello react world!</a></h1>
  </header>
}

const Nav = (props) => {
  const lis = props.topics.map(v=>{
    return <li><a href={'read'+ v.id}>{v.title}</a></li>
  })
  
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

const Article = (props) => {
  return <article>
    <h2> {props.title} </h2>
    {props.body}
  </article>
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  let content = null;
  if(mode === 'WELCOME') {
    content = <Article title="index" body="page"></Article>
  } if(mode === 'READ') {
    content =  <Article title="index" body="page"></Article>
  }            
  const topics = [
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..."},
    { id: 3, title: "javascript", body: "javascript is..."}
  ]

  return (
    <div>
      <Header onChange={()=>{}}></Header>
      <Nav topics={topics}></Nav>
      {content}
    </div>
  );
}

export default App;
