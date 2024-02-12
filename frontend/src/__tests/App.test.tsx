import App from "@/App.tsx";
import { render, screen } from '@testing-library/react'
// import {userEvent} from "@testing-library/user-event";

describe('App', () => {

    it('should render with a descriptive header, input fields, and an add button', () => {
        render(<App/>)
        expect(screen.getByText('World\'s Worst HTTP Calculator')).toBeVisible()
        expect(screen.getAllByRole('spinbutton').length).toBe(2)
        expect(screen.getByRole('button', {name: 'Add'})).toBeVisible()
    })

    // it('should display the answer when clicking the add button', async () => {
    //     render(<App/>)
    //     const firstValueInput = screen.getAllByRole('spinbutton')[0]
    //     const secondValueInput = screen.getAllByRole('spinbutton')[1]
    //     const addButton = screen.getByRole('button', {name: 'Add'})
    //
    //     await userEvent.type(firstValueInput, '2')
    //     await userEvent.type(secondValueInput, '3')
    //     await userEvent.click(addButton)
    //
    //     expect(await screen.findByRole('alertdialog')).toBeVisible()
    //     expect(screen.getByTestId('answer')).toHaveTextContent('5')
    // })

})