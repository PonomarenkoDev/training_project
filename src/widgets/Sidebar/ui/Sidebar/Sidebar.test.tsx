import {fireEvent, screen} from "@testing-library/react";
import {Sidebar} from "widgets/Sidebar/ui/Sidebar/Sidebar";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation.tsx";

describe('Sidebar', () => {
    test('Render sidebar', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })

    test('Test toggle', () => {
        renderWithTranslation(<Sidebar/>)
        const ToggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(ToggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
});