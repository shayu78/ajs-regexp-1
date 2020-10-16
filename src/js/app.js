/* eslint-disable no-console */

export default class Validator {
  constructor(username) {
    if (typeof username !== 'string') throw new Error('Некорректный тип данных, требуется строка');
    this.username = username;
  }

  validateUsername() {
    return (this.username.search(/^[a-zA-Z]+[\da-zA-Z_-]*[a-zA-Z]+$/) !== -1
      && this.username.search(/\d{4,}/) === -1);
  }
}

try {
  const userValidator = new Validator('s123-1_ww735ww_r');
  const validateStatus = userValidator.validateUsername();
  console.log(validateStatus);
  console.log(new Validator(true));
} catch (error) {
  console.error(error.message);
}
