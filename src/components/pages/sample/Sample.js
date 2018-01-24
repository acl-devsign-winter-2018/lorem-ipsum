import html from './sample.html';
import Template from '../../Template';

const template = new Template(html);

export default class Sample {

  render() {
    const dom = template.clone();

    return dom;
  }
}