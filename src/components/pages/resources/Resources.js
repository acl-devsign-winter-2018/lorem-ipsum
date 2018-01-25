import html from './resources.html';
import Template from '../../Template';

const template = new Template(html);

export default class Resources {

  render() {
    const dom = template.clone();

    return dom;
  }
}