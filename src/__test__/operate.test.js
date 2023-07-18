import operate from '../logic/operate';

describe('Operate fucntion test', () => {
  it('Plus First Number with Second Number', () => {
    expect(operate('10', '10', '+')).toBe('20');
    expect(operate('2', '5', '+')).not.toBe('6');
  });

  it('Minus First Number with Second Number', () => {
    expect(operate('10', '9', '-')).toBe('1');
    expect(operate('8', '9', '-')).not.toBe('1');
  });

  it('Multiply First Number with Second Number', () => {
    expect(operate('2', '4', 'x')).toBe('8');
    expect(operate('10', '5', 'x')).not.toBe('51');
  });

  it('divide First Number with Second Number', () => {
    expect(operate('20', '10', '÷')).toBe('2');
    expect(operate('0.5', '1.2', '÷')).not.toBe('1.7');
  });

  it('Modolus First Number with Second Number', () => {
    expect(operate('20', '10', '%')).toBe('0');
    expect(operate('4', '3', '%')).toBe('1');
  });
});
