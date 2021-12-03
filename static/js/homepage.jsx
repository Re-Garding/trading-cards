'use strict';

function Homepage() {
  return <div>

  Welcome to our Card Site! <br></br>
  <a href="/cards">Look at cards here!</a><br></br>
  <img src="/static/img/balloonicorn.jpg"></img>

  </div>;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
