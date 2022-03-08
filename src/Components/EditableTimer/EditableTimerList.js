import { renderElapsedString } from "../../Helpers/Helpers";

export const EditableTimerList = () => {
    return(
        <div>
            <EditableTimer 
                title='Learn React'
                project='Web Domination'
                elapsed='8986300'
                runningSince={null}
                editFormOpen={false}
            />
            <EditableTimer 
                title='Learn extreme ironing'
                project='World Domination'
                elapsed='3890985'
                runningSince={null}
                editFormOpen={true}
            />
        </div>
    );
}

const EditableTimer = (props) => {
    if(props.editFormOpen) {
        return(
            <TimerForm 
                title={props.title}
                project={props.project}
            />
        );
    } else {
        return(
            <Timer 
                title={props.title}
                project={props.project}
                elapsed={props.elapsed}
                runningSince={props.runningSince}
            />
        );
    }
}

export const TimerForm = (props) => {
    const submitText = props.title ? 'Update' : 'Create';
    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <div className="w-80 h-56 shadow-lg rounded-md mb-12 p-4">
                    <div className="flex flex-col mb-3">
                        <label className="font-bold">Title</label>
                        <input className="border outline-none rounded-md h-9 pl-3 pb-1" type="text" defaultValue={props.title}/>
                    </div>
                    <div className="flex flex-col mb-3">
                        <label className="font-bold">Project</label>
                        <input className="border outline-none rounded-md h-9 pl-3 pb-1" type="text" defaultValue={props.project}/>
                    </div>
                    <div className="mt-5 w-full flex items-center justify-center">
                        <button className="w-6/12 h-9 border-r-0 border border-blue-500 text-blue-500">{submitText}</button>
                        <button className="w-6/12 h-9 border border-red-500 text-red-500">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Timer = (props) => {
    const elapsedString = renderElapsedString(props.elapsed)

    return(
        <div className="shadow-lg w-80 h-56 mb-12">
            <div className="flex flex-col p-4">
                <div className="font-bold text-xl">{props.title}</div>
                <div className="text-base text-slate-400 font-thin">{props.project}</div>
                <div className="mt-5 text-center text-3xl font-bold text-gray-600">
                    <h2>{elapsedString}</h2>    
                </div>
                <div className="text-right mt-5">
                    <span className="cursor-pointer">📋</span>
                    <span className="cursor-pointer">🗑️</span>
                </div>
            </div>
            <div className="w-full h-10 border border-blue-500 text-blue-500 text-center cursor-pointer py-2 rounded-b">Start</div>
        </div>
    );
}