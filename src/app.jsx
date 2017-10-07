import React, { Component } from 'react';
import Card from './components/card.jsx';
import Cards from './components/card_urls.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: Cards,
      cardNum: 0
    };

    this.nextCard = this.nextCard.bind(this);
    this.prevCard = this.prevCard.bind(this);
  }

  nextCard() {
    if (this.state.cardNum === this.state.cards.length - 1) {
      this.setState({ cardNum: 0 });
    } else {
      let stateCardNum = this.state.cardNum;
      stateCardNum += 1;
      this.setState({ cardNum: stateCardNum });
    }
  }

  prevCard() {
    if (this.state.cardNum === 0) {
      this.setState({ cardNum: this.state.cards.length - 1 });
    } else {
      let stateCardNum = this.state.cardNum;
      stateCardNum -= 1;
      this.setState({ cardNum: stateCardNum });
    }
  }

  render() {
    return (
      <div className="app">
        <h1> Click for next card</h1>
        <Card nextCard={this.nextCard}
          prevCard={this.prevCard}
          card={ this.state.cards[this.state.cardNum] }/>
      </div>
    );
  }
}

export default App;
