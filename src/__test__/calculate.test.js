import calculate from '../logic/calculate';

describe('calculate function', () => {
  it('it should retrun an object with total and null when AC is clicked', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, 'AC');

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('it should return an object with next and total updated when an operation button is clicked', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, '-');
    expect(result).toEqual({
      total: '15',
      next: null,
      operation: '-',
    });
  });

  it('it should return an Sum when = is clicked', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, '=');

    expect(result).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });
  // If there is an operation, update next
  it('it should return an object with the next property updated when a number button is clicked', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, '6');

    expect(result).toEqual({
      total: '10',
      next: '56',
      operation: '+',
    });
  });

  // '=' with no operation, nothing to do
  it('it should return nothing if = clicked with  no operation', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: null,
    };
    const result = calculate(obj, '=');

    expect(result).toEqual({});
  });

  // If there is no operation, update next and clear the value
  it('If there is no operation, update next and clear the value ', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: null,
    };
    const result = calculate(obj, '6');

    expect(result).toEqual({
      next: '56',
      total: null,
    });
  });
});
