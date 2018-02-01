import Template from '../Template';
import html from './app.html';
import './app.css';
import Content from '../content/Content';
import '../content/content.css';
import Footer from '../footer/Footer';



const template = new Template(html);

export default class App {

  render(){
    const dom = template.clone();

    dom.querySelector('main').appendChild(new Content().render());

    dom.querySelector('footer').appendChild(new Footer().render());

    return dom;
  }
}