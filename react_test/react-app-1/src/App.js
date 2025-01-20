import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function Header(props) {
  return <header>
    <h1><a href="/" onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'/read/' + t.id} onClick={(e) => {
      e.preventDefault();
      props.displayNumber(Number(e.target.id));
    }}>{t.title}</a></li>)

  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>

}

function Create(props) {
  return <article>
    <h2>Create</h2>
    <form onSubmit={e => {
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title"></input></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="create"></input></p>
    </form>
  </article>
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={e => {
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title" value={title} onChange={(e)=>{
        setTitle(e.target.value);
      }}></input></p>
      <p><textarea name="body" placeholder="body" value={body} onChange={(e)=>{
        setBody(e.target.value);
      }}></textarea></p>
      <p><input type="submit" value="update"></input></p>
    </form>
  </article>
}


function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  const [topics, setTopics] = useState([
    { id: 1, title: "html~", body: "html is...." },
    { id: 2, title: "css~", body: "css is...." },
    { id: 3, title: "javascript~", body: "js is...." },
  ]);
  // console.log(id)

  let content = null;
  let contextControl = null;
  if (mode === 'WELCOME') {
    content = <Article title="welcome!!" body="hello. web!!"></Article>
  } else if (mode === 'READ') {
    content = <Article title={topics[id - 1]['title']} body={topics[id - 1]['body']}></Article>
    contextControl = <>
      <li><a href={"/update/" + id} onClick={e => {
        e.preventDefault();
        setMode('UPDATE');
      }}>update</a></li>
      <li><input type="button" value="delete" onClick={e=>{
        const newTopics = [];
        for(let i=0; i<topics.length; i++) {
          if(topics[i].id !== id) {
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('WELCOME');
      }} /></li>
      </>
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(title, body) => {
      const newTopic = { id: nextId, title: title, body: body };
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);

      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  } else if (mode === 'UPDATE') {
    const title = topics[id-1]['title'];
    const body = topics[id-1]['body'];
    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      const updatedTopic = {id:id, title: title, body: body};
      const newTopics = [...topics];
      for(let i=0; i<newTopics.length; i++) {
        if(newTopics[i].id === id) {
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      console.log(newTopics)
      setMode('READ');
    }}></Update>
  }


  return (
    <div>
      <Header title="REACT" onChangeMode={() => {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} displayNumber={(num) => {
        setMode('READ');
        setId(num);
      }}></Nav>
      {content}
      <ul>
        <li><a href="/create" onClick={(e) => {
          e.preventDefault();
          setMode('CREATE');
        }}>create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;