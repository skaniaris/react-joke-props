import React from 'react';
import Joke from './Joke';
import './App.css';

export default function App() {
  return (
    <main>
      <Joke
      setup="Why does Waldo wear stripes?"
      punchline="Because he doesn’t want to be spotted."
      />
      <Joke
      setup="Why did the chicken go to prison?"
      punchline="Crimes."
      />
      <Joke
      setup="What do you call a sad cup of coffee?"
      punchline="Depresso."
      />
      <Joke
      setup="What did the grape say when the elephant sat on it?"
      punchline="Nothing, but it let out a little wine."
      />
      <Joke
      setup="What do you get when you cross a joke with a rhetorical question?"
      />
    </main>
  )
}
