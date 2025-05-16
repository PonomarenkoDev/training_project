import {render, screen} from "@testing-library/react";
import {Button, ThemeButton} from "shared/ui/Button/Button.tsx";


describe('Button', () => {
    test('Checked text', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    })

    test('Checked theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    })
})