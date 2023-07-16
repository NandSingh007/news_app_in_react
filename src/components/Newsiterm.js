import React, { Component } from 'react'

export class Newsiterm extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "19rem" }}>
          <img src={!imageUrl?"https://s.yimg.com/uu/api/res/1.2/Qa86IOvc8vqePfM0t9Oygw--~B/aD00MDA7dz03Mjg7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/moneywise_327/75af4c9566b712550e08ca7fe0bb319d":imageUrl} />
          <div className="card-body">
            <h5 className="card-title" >{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsiterm