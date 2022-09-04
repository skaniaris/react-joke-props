import React from 'react';
import Joke from './Joke';
import './App.css';

export default function App() {
  return (
    <main>
      <Joke
      setup="Why does Waldo wear stripes?"
      punchline="Because he doesn’t want to be spotted."
      rating={2}
      />
      <Joke
      setup="Why did the chicken go to prison?"
      punchline="Crimes."
      rating={5}
      />
      <Joke
      setup="What do you call a sad cup of coffee?"
      punchline="Depresso."
      rating={4}
      />
      <Joke
      setup="What did the grape say when the elephant sat on it?"
      punchline="Nothing, but it let out a little wine."
      rating={3}
      />
      <Joke
      setup="What do you get when you cross a joke with a rhetorical question?"
      rating={2}
      />
    </main>
  )
}
