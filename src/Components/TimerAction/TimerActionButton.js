export const TimerActionButton = (props) => {
    if(props.timerIsRunning) {
        return(
            <div className="w-full h-10 border border-red-500 text-red-500 text-center cursor-pointer py-2 rounded-b" onClick={props.onStopClick}>Stop</div>
        );
    } else {
        return(
            <div className="w-full h-10 border border-blue-500 text-blue-500 text-center cursor-pointer py-2 rounded-b" onClick={props.onStartClick}>Start</div>
        );
    }
}