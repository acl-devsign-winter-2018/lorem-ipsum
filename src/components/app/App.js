import Template from '../Template';
import html from '../app.html';
import './app.css';
import Header from '../header/Header';
import '../header/header.css';
import Content from '../content/Content';
import '../content/content.css';
import Footer from '../footer/Footer';
import '../footer/footer.css';

const template = new Template(html);

export default class App {

  updateStyle(newClass, domTarget) {
    const newClassValue = newClass.options[newClass.selectedIndex].value;
    domTarget.className = newClassValue;
  }

  render() {
    const dom = template.clone();
    dom.querySelector('header').appendChild(new Header().render());
    dom.querySelector('main').appendChild(new Content().render());
    dom.querySelector('footer').appendChild(new Footer().render());

    this.typeScale = dom.getElementById('type-scale');
    this.fontpair = dom.getElementById('font-pair');

    dom.getElementById('type-scale-select').onChange = event => {
      this.updateStyle(event.target, this.typeScale);
    };
    dom.getElementById('font-pair-select').onChange = () => {
      this.updateStyle(event.target, this.fontPair);
    };
   
    return dom;

  }
}