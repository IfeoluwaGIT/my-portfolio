import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
   
   <Navbar />
      <Header />
      <Skills />
      <ProjectList />
      <AboutMe />
      <Contact />
      <Footer />

      
      
      
     
    </div>
  );
}

export default App;

/*
import React from 'react';
const dad = 'Daddy;'
const names = ['ife', 'paul', 'luke', 'loke'];
const loggedIn= false;
const App = () => {
  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={{color : 'red', fontSize: '50px'}}>Hello {dad}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
    </>
  );
}

export default App; */