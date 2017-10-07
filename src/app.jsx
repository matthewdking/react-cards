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
      this.setState({ cardNum: 0, prevCardNum: this.state.cards.length - 1 });
    } else {
      let stateCardNum = this.state.cardNum;
      stateCardNum += 1;
      this.setState({ cardNum: stateCardNum, prevCardNum: stateCardNum - 1 });
    }
  }

  prevCard() {
    if (this.state.cardNum === 0) {
      this.setState({ cardNum: this.state.cards.length - 1, prevCardNum: 0 });
    } else {
      let stateCardNum = this.state.cardNum;
      stateCardNum -= 1;
      this.setState({ cardNum: stateCardNum, prevCardNum: stateCardNum + 1 });
    }
  }

  componentDidMount() {
    document.querySelector('.prevCard').classList.add('slideOutLeft');
  }

  render() {
    return (
      <div className="app">
        <h1> Click for next card</h1>
        <Card nextCard={this.nextCard}
          prevCard={this.prevCard}
          card={ this.state.cards[this.state.cardNum]}
          prevCardNum={ this.state.cards[this.state.prevCardNum]}/>
      </div>
    );
  }
}

export default App;
