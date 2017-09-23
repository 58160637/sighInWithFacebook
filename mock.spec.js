function Auth(authService){
  this.authService = authService
  this.sighInWithFacebook = (phone,password)=>{
    return this.authService(phone,password)
  }
}
test('mock with 1 shouls return 1', () => {
  const mockFn = jest.fn(1)
    .mockReturnValue(1)

  expect(mockFn(1)).toBe(1)
  expect(mockFn).toBeCalledWith(1)
})
test('Singin with valid credentical shouls pass',() =>{
  const returnObject = {
    name: 'Weera',
    facebookId: '123456',
    email:'www@hotmail.com'
  }
  const mockFacebook = jest.fn('0881234567','123456789')
    .mockReturnValue(returnObject)
  let app = new Auth(mockFacebook)
  let value = app.sighInWithFacebook('0881234567','12354687')
  expect(value).toEqual(returnObject)
  expect(mockFacebook).toBeCalled()

})
