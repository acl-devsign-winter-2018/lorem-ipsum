import Template from '../Template';
import html from './app.html';
import './app.css';
import Content from '../content/Content';
import '../content/content.css';


const template = new Template(html);

export default class App {

  render(){
    const dom = template.clone();

    dom.querySelector('main').appendChild(new Content().render());

    return dom;
  }
}