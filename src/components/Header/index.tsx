import { PureComponent, ReactNode } from "react";

interface HeaderProps {
  options: string[];
}

class Header extends PureComponent<HeaderProps> {
  render(): ReactNode {
    return (
      <header>
        {this.props.options.map((option) => (
          <li>{option}</li>
        ))}
      </header>
    );
  }
}

export default Header;
