import Template from '../Template';
import html from './app.html';
import './app.css';
import { removeChildren } from '../dom';
import Header from './Header';
// import Beginning from '../pages/beginning/Beginning';
// import Saftey from '../pages/saftey/Saftey';
// import Improving from '../pages/improving/Improving';

const template = new Template(html);

// const map = new Map();
// map.set('#beginning', Beginning);
// map.set('#saftey', Saftey);
// map.set('#improving', Improving);

export default class App {

  // constructor() {
  //   window.onhashchange = () => {
  //     this.setPage();
  //   };
  // }

  // setPage() {
  //   const Component = map.get(window.location.hash) || Beginning;
  //   const component = new Component();
  //   removeChildren(this.main);
  //   this.main.appendChild(component.render());
  // }

  render() {
    const dom = template.clone();   
    
    dom.querySelector('header').appendChild(new Header().render());

    this.main = dom.querySelector('main');
    // this.setPage();

    return dom;
  }
}
