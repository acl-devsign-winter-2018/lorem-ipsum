import html from './footer.html';
import Template from '../Template';

const template = new Template(html);

export default class Footer {
  render(){
    return template.clone();

  }
}