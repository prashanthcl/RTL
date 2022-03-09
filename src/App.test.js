import {render,screen} from '@testing-library/react'
import App from './App'
test('WHEN TEXT FOUND THEN SUCCESS',()=>{
  render(<App/>)
  const ele = screen.getByRole('link',{name:'Learn React'})
  expect(ele).toBeInTheDocument()
})
