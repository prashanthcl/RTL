import {render,screen,fireEvent} from '@testing-library/react'
import Button from './Button'
// import fireEvent from '@testing-library/user-event'
test('Button has correct initial color',()=>{
render(<Button/>)
const ele = screen.getByRole('button',{name:'Change to Blue'})
expect(ele).toHaveStyle({backgroundColor:'red'})
})
test('Initial Conditions',()=>{
    render(<Button/>)
    const colBtn = screen.getByRole('button',{name:'Change to Blue'})
    expect(colBtn).toBeEnabled()

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
})
test('Checkbox disables button on first click and enables on second click',()=>{
    render(<Button/>)

    const checkbox = screen.getByRole('checkbox')
    const button = screen.getByRole('button')

    fireEvent.click(checkbox)
    expect(button).not.toBeEnabled()

    fireEvent.click(checkbox)
    expect(button).toBeEnabled()
})
test('Disabled button has gray background and reverse to red',()=>{
    render(<Button/>)

    const checkbox = screen.getByRole('checkbox')
    const colorBtn = screen.getByRole('button')

    fireEvent.click(checkbox)
    expect(colorBtn).toHaveStyle('background-color:gray')

    fireEvent.click(checkbox)
    expect(colorBtn).toHaveStyle('background-color:red')
})
test('Clicked disabled button has gray background and reverts to blue',()=>{
    const checkbox = screen.getByRole('checkbox')
    const colorBtn = screen.getByRole('button')

    fireEvent.click(checkbox)
    expect(colorBtn).toHaveStyle('background-color:gray')

    // fireEvent.click(checkbox)
    // expect(colorBtn)
})