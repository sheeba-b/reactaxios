import React from 'react';
import './App.css';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React CRUD with Axios</h1>
      </header>
      <main>
        <CreatePost />
        <PostList />
      </main>
    </div>
  );
}

export default App;