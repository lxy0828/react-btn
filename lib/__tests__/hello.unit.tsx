import {goTo} from './utils'
function add(a: number, b: number) {
  return a + b
}
describe('我的第一个测试用例', () => {
  it('add(1,2) 等于3', () => {
      expect(add(1,2)).toEqual(3);
  })
})
describe('我的第二个测试用例', () => {
  it('goTo(4,6) 等于10', () => {
      expect(goTo(4,6)).toEqual(10);
  })
})