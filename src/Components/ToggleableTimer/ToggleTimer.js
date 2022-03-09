import { useState } from "react";
import { TimerForm } from "../EditableTimer/EditableTimerList";

export const ToggleableTimerForm = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleFormOpen = () => {
        setIsOpen(true);
    };
    const handleFormClose = () => {
        setIsOpen(false);
    }
    const handleFormSubmit = (timer) => {
        props.onFormSubmit(timer);
        setIsOpen(false);
    }

    if(isOpen) {
        return (
            <TimerForm 
                onFormSubmit={handleFormSubmit}
                onFormClose={handleFormClose}
            />
        );
    } else {
        return (
            <div className="text-center text-4xl">
                <button onClick={handleFormOpen}>➕</button>
            </div>
        )
    }
}