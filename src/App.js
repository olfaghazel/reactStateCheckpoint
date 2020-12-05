import React from "react";
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Olfa GHAZEL',
        bio: "I am dynamic, professional, talented, with proven track record in learning new design skills. Proficient in a wide variety of engineering software. Notably I am a conscientious person who works hard and pays attention to details, flexible and quick to pick up new skills as eager to learn from others.",
        imgSrc: '/photo.jpg',
        profession: 'Full stack developer'
      },
      bool: false,
      counter: 0
    };
  }

  handleClick = () => this.state.bool ? this.setState({ bool: false }) : this.setState({ bool: true });

  incrementCounter = () => {
    const { counter } = this.state;
    this.state.bool ?
      this.setState({ counter: counter + 1 }) : this.setState({ counter: 0 });
  };

  componentDidMount = () => {
    setInterval(this.incrementCounter, 1000);
  }


  render() {
    return (
      <>
        <div style={{ display: 'flex', margin: 30, justifyContent: 'spaceBetween', alignItems: 'center' }}>
          {/*************  Display button *****************/}
          <button style={{
            background: '#FA8072', border: 'none',
            color: 'white', padding: 15, fontSize: 20,
            textAlign: 'center', borderRadius: 5,
            cursor: 'pointer', width: 150, height: 50
          }} onClick={this.handleClick} >{this.state.bool ? "Hide" : "Display"}</button>
          {/*************  Counter *****************/}
          <h2 style={{ color: '#FA8072', paddingLeft: 30 }}>{this.state.counter} seconds have elapsed since mounting.</h2>
        </div>
        {this.state.bool && (

          <div style={{
            display: 'flex', width: 900, justifyContent: 'center', margin: 'auto', border: 'salmon',
            borderStyle: 'dashed', padding: 20, borderRadius: 10
          }}>
            {/*************  Countent *****************/}
            <img style={{ width: 600, height: 500 }} src={this.state.Person.imgSrc} />
            <div style={{ margin: 50 }}>
              <h2 style={{
                fontFamily: "Times New Roman", fontSize: 50, color: "coral"
              }}>
                {this.state.Person.fullName}
              </h2>
              <h3 style={{
                fontFamily: "Arial", fontSize: 20, fontStyle: "oblique", color: '#CFCFCF'
              }}>
                {this.state.Person.bio || 'Welcome to my profile'}
              </h3>
              <h4 style={{
                fontStyle: "italic", fontSize: 30, color: "burlywood", textDecoration: 'wavy underline'
              }}>
                {this.state.Person.profession}
              </h4>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default App;
