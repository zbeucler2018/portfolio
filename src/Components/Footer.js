import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <p
            onClick={() =>
              navigator.clipboard.writeText(
                "0x4c91498Cfc2449709999b6d0b149f45BC7830563"
              ) &&
              alert(
                "My MetaMask wallet address has been saved to your keyboard! Thanks for the Crypto!"
              ) &&
              console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)
            }
          >
            Send me Crypto! <i className="fab fa-ethereum"></i>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
