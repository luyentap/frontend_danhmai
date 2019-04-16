import React, {Component} from 'react';
import MenuAdmin from "../MenuAdmin"
import Customer from './Customer';

export default class CustomerAdmin extends Component {
  render() {
    return (
      <div>

        <div className="container gridpage">
          <MenuAdmin/>
          <Customer/>
        </div>
      </div>
    );
  }
}
