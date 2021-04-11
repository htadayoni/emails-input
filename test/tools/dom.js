const { resolve } = require('path')
const { readFile } = require('fs/promises')
const { JSDOM, ResourceLoader } = require('jsdom')

class LocalResourceLoader extends ResourceLoader {
  constructor() {
    super();
    this.basePath = `file://${process.cwd()}/`;
  }

  async fetch(url, options) {
    if (!url.startsWith(this.basePath))
      return this.fetchExternal(url, options);

    const path = url.replace(this.basePath, '');
    const fileContent = await readFile(resolve(path), 'utf-8');
    return Buffer.from(fileContent);
  }

}

const load = async function load(file) {
  const options = { runScripts: 'dangerously', resources: new LocalResourceLoader() };
  const dom = await JSDOM.fromFile(file, options);
  return new Promise(resolve =>
    dom.window.document.addEventListener('DOMContentLoaded', () => resolve(dom))
  );
}

module.exports = { load }
