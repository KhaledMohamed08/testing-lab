import { TestPipe } from './test.pipe';

describe('TestPipe', () => {
  const pipe = new TestPipe()
  it('create an instance', () => {
    const pipe = new TestPipe();
    expect(pipe).toBeTruthy();
  });
  it('test pipe', () => {
    const x = pipe.transform(10)
    expect(x).toEqual(10);
  })
});
