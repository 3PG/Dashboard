import { MiniDatePipe } from './mini-date.pipe';

describe('MiniDatePipe', () => {
  it('create an instance', () => {
    const pipe = new MiniDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('build labels returns last 7 days as string date', () => {
    const pipe = new MiniDatePipe();

    const result = pipe.transform(new Date().toString());
    const date = new Date();

    const expected = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    expect(result).toBe(expected);
  });
});
