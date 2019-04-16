import React, {Component} from 'react';
import MenuAdmin from "../MenuAdmin"
import Bill from "./Bill";

export default class BillAdmin extends Component {
  render() {
    return (
      <div>
        <div className="container gridpage">
          <MenuAdmin/>
          <Bill/>
        </div>
      </div>
    );
  }
}
