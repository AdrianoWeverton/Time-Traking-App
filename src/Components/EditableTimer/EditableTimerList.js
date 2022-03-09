import { useState } from "react";
import { renderElapsedString } from "../../Helpers/Helpers";
import { TimerActionButton } from "../TimerAction/TimerActionButton";

export const EditableTimerList = (props) => {
    const timers = props.timers.map((timer) => (
        <EditableTimer 
            key={timer.id}
            id={timer.id}
            title={timer.title}
            project={timer.project}
            elapsed={timer.elapsed}
            runningSince={timer.runningSince}
            onFormSubmit={props.onFormSubmit}
            onTrashClick={props.onTrashClick}
            onStartClick={props.onStartClick}
            onStopClick={props.onStopClick}
        />
    ));
    return (
        <div>
            {timers}
        </div>
    );

}

const EditableTimer = (props) => {
    const [editFormOpen, setEditFormOpen] = useState(false);

    const handleEditClick = () => { openForm() };
    const handleFormClose = () => { closeForm() };
    const handleSubmit = (timer) => {
        props.onFormSubmit(timer);
        closeForm();
    };
    const closeForm = () => {setEditFormOpen(false)};
    const openForm = () => {setEditFormOpen(true)};

    if(editFormOpen) {
        return(
            <TimerForm
                id={props.id}
                title={props.title}
                project={props.project}
                onFormSubmit={handleSubmit}
                onFormClose={handleFormClose}
            />
        );
    } else {
        return(
            <Timer
                id={props.id}
                title={props.title}
                project={props.project}
                elapsed={props.elapsed}
                runningSince={props.runningSince}
                onEditClick={handleEditClick}
                onTrashClick={props.onTrashClick}
                onStartClick={props.onStartClick}
                onStopClick={props.onStopClick}
            />
        );
    }
}

export const TimerForm = (props) => {
    const submitText = props.title ? 'Update' : 'Create';

    const [title, setTitle] = useState(props.title);
    const [project, setProject] = useState(props.project);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleProjectChange = (e) => {
        setProject(e.target.value);
    };
    const handleSubmit = () => {
        props.onFormSubmit({
            id: props.id,
            title: title,
            project: project,
        });
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <div className="w-80 h-56 shadow-lg rounded-md mb-12 p-4">
                    <div className="flex flex-col mb-3">
                        <label className="font-bold">Title</label>
                        <input className="border outline-none rounded-md h-9 pl-3 pb-1" type="text" value={title} onChange={handleTitleChange}/>
                    </div>
                    <div className="flex flex-col mb-3">
                        <label className="font-bold">Project</label>
                        <input className="border outline-none rounded-md h-9 pl-3 pb-1" type="text" value={project} onChange={handleProjectChange}/>
                    </div>
                    <div className="mt-5 w-full flex items-center justify-center">
                        <button className="w-6/12 h-9 border-r-0 border border-blue-500 text-blue-500" onClick={handleSubmit}>{submitText}</button>
                        <button className="w-6/12 h-9 border border-red-500 text-red-500" onClick={props.onFormClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Timer = (props) => {
    const elapsedString = renderElapsedString(props.elapsed, props.runningSince)

    const handleTrashClick = () => {
        props.onTrashClick(props.id);
    };

    const handleStartClick = () => {
        props.onStartClick(props.id);
    };
    const handleStopClick = () => {
        props.onStopClick(props.id);
    }

    return(
        <div className="shadow-lg w-80 h-56 mb-12">
            <div className="flex flex-col p-4">
                <div className="font-bold text-lg">{props.title}</div>
                <div className="text-base text-slate-400 font-thin">{props.project}</div>
                <div className="mt-5 text-center text-3xl font-bold text-gray-600">
                    <h2>{elapsedString}</h2>    
                </div>
                <div className="text-right mt-5">
                    <span className="cursor-pointer" onClick={props.onEditClick}>📋</span>
                    <span className="cursor-pointer" onClick={handleTrashClick}>🗑️</span>
                </div>
            </div>
            <TimerActionButton 
                timerIsRunning={!!props.runningSince}
                onStartClick={handleStartClick}
                onStopClick={handleStopClick}
            />
        </div>
    );
}