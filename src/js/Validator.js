export default class Validator {
  constructor(name) {
    this.name = name;
    this.validateUsername(name);
  }

  // eslint-disable-next-line class-methods-use-this
  validateUsername(value) {
    if (/[a-z]([\w-]*[a-z])?$/i.test(value) && !/[\d]{4}/.test(value)) {
      return true;
    }
    throw new Error('Не подходящее имя');
  }
}
