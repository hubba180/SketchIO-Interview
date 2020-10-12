import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      paragraph: "Hi! I'm a full stack developer based in the PNW. As you might imagine, that means my interests include developing responsive applications and websites with both C# and Javascript. One of the strongest points about me is my curiosity. It's what makes me a dedicated problem solver. I'm never discouraged by complex problems, in fact, I enjoy them as I believe every problem is an opportunity to grow and learn. What I'm looking for is to work in a position that utilizes both my creativity and technical knowledge to complete work that is both diverse and challenging. I enjoy working with other professionals especially if they come from a different background. I believe that we all have something offer and when a team can embrace that, anything is possible! Some of my favorite things include: Dad jokes over beers, traveling, and playing my guitar!"
    }
  }
  render () {
    return (
      <React.Fragment>
        <div>
          <h1>Hello World</h1>
          <p>{this.state.paragraph}</p>
        </div>
        <button onClick="">Reverse</button>
      </React.Fragment>
    );
  }
}

export default App;
