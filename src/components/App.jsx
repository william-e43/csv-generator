import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: null
    }
  }

  handleSubmit (event, jsonData) {
    event.preventDefault();
    console.log(jsonData);
  }

  render () {
    return(
      <div>
        <h1>CSV Generator</h1>
         <form tpye="submit" action="/" method="POST">
           <label>JSON Data</label><br></br>
           <textarea id="json-input" type="text" name="jsonData" required></textarea><br></br>
           <button type="submit">Submit</button>
         </form>
      </div>

    );
  }
}

export default App;

// onSubmit={(event)=> this.handleSubmit(event, document.getElementById("json-input").value)/>