import React, { Component } from "react";

export class Abilities extends Component {
  render() {

    return (

      <div className="fadeIn" id="fadeIn">

        <hr />
        <h2>ABILITIES</h2>
        <hr/>
        <div className="abilities-container">
        <table>
        <tr>
          <th><h3>LANGUAGE</h3></th>
          <th><h3>LEVEL</h3></th>
        </tr>
        <tr>
        <td>HTML</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></td>
        </tr>
        <tr>
        <td>CSS</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half" aria-hidden="true"></i></td>
        </tr>
        <tr>
        <td>Javascript</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half" aria-hidden="true"></i></td>
        </tr>
        <tr>
        <td>React</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half" aria-hidden="true"></i></td>
        </tr>
        <tr>
        <td>Python</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half" aria-hidden="true"></i></td>
        </tr>
        <tr>
        <td>Java</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half" aria-hidden="true"></i></td>
        </tr>
        </table>
        <hr/>
        <table>
        <tr>
          <th><h3>TOOLS/CONCEPTS</h3></th>
          <th> </th>
        </tr>
        <tr>
        <td>Github/Git</td>
        <td>AJAX</td>
        </tr>
        <tr>
        <td>Promises</td>
        <td>API's</td>
        </tr>
        <tr>
        <td>Babel</td>
        <td>NPM</td>
        </tr>
        <tr>
        <td>Component Lifecycle</td>
        <td>Node.js</td>
        </tr>
        <tr>
        <td>Axios</td>
        <td>Flexbox/Grid</td>
        </tr>
        <tr>
        <td>Functional Programs</td>
        <td>OOP's</td>
        </tr>
        </table>
      </div>
      </div>
    );
  }
}

export default Abilities;
