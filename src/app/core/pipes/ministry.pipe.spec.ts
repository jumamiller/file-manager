import { MinistryPipe } from './ministry.pipe';

describe('MinistryPipe', () => {
  it('create an instance', () => {
    const pipe = new MinistryPipe();
    expect(pipe).toBeTruthy();
  });
});
