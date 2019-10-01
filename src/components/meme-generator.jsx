import React from "react";

class Meme extends React.Component {
  state = {
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
    allImages: []
}
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allImages: memes });
      });
  }

  handleChange=(event)=> {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit=(event)=>{
      event.preventDefault()
      const randNum=Math.floor(Math.random()*this.state.allImages.length);
      const randMemeImage = this.state.allImages[randNum].url
      this.setState({randomImage:randMemeImage})

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div
            className="row"
            style={{ marginTop: 20, marginRight: 20, marginLeft: 20 }}
          >
            <div className="col">
              <input
                type="text"
                name="topText"
                className="form-control"
                placeholder="Top Text"
                value={this.state.topText}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="col">
              <input
                type="text"
                name="bottomText"
                className="form-control"
                placeholder="Bottom Text"
                value={this.state.bottomText}
                onChange={this.handleChange}
              ></input>
            </div>
            <button className="btn-primary">Generate</button>
          </div>
        </form>
        <div
          style={{
            position: "relative",
            textAlign: "center",
            color: "white",
            marginTop: 20
          }}
        >
          <img src={this.state.randomImage} alt=""></img>
          <h2
            style={{
              position: "absolute",
              top: '8px',
              right: '16px',
              transform: "translate(-8%, -8)"
            }}
          >
            {this.state.topText}
          </h2>
          <h2
            style={{ 
                position: "absolute",
                bottom: "8px",
                right: "16px",
                marginBottom:'20px'
              }}
          >
            {this.state.bottomText}
          </h2>
        </div>
      </div>
    );
  }
}

export default Meme;
