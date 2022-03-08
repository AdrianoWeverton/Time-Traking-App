import { TimerForm } from "../EditableTimer/EditableTimerList";

export const ToggleableTimerForm = (props) => {
    if(props.isOpen) {
        return (
            <TimerForm />
        );
    } else {
        return (
            <div className="text-center text-4xl">
                <button>➕</button>
            </div>
        )
    }
}