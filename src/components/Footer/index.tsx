import { Component, ReactNode } from "react";

interface FooterProps {
  socials: string[];
  services: string[];
}

class Footer extends Component<FooterProps> {
  render(): ReactNode {
    return (
      <footer>
        <ul>
          {this.props.socials.map((social) => (
            <li>{social}</li>
          ))}
          {this.props.services.map((service) => (
            <li>{service}</li>
          ))}
        </ul>
      </footer>
    );
  }
}

export default Footer;
