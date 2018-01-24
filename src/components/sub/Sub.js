import html from './sub.html';
import './sub.css';
import Template from '../Template';

const template = new Template(html);

export default class Sub {

  render() {
    const dom = template.clone();

    return dom;
  }
}