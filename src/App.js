/* import 'react-dates/initialize'; */
import React from 'react';
/* import 'react-dates/lib/css/_datepicker.css'; */
import './App.css';
/* import {SingleDatePicker} from 'react-dates' */
import Tweets from './Tweets';
import Tweet from './Tweet';
import Disappearing from './Disappearing';

class App extends React.Component {x
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        /*  createdAt: moment(),
       focused: false */
      }

    }
    //this.handleInput=this.handleInput.bind(this);
    //this.tweets=this.tweets.bind(this);
  }
  onInputChange = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  tweets = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          date: ''
        }
      })
    }
  }
  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="inner">
            <h1>Disappearing <span>Tweet</span></h1>
          </div>
        </div>
        <div className="App">
            <form id="DisappearingTweet" onSubmit={this.tweets}>
              <textarea row="50" cols="40" placeholder="What's happening?" value={this.state.currentItem.text}
                onChange={this.onInputChange} />
              {/* <SingleDatePicker
             date={this.state.createdAt}
             onDateChange={date => this.setState({createdAt: date })} 
             focused={this.state.focused}
             onFocusChange={({ focused }) => this.setState({ focused })}/> */}
              
              <input type="date" />
                <button type="submit">Tweet</button>
            </form>

          <Tweets items={this.state.items} >
          </Tweets>
          <div></div>

        </div>
      </div>
    )
  }

}
export default App