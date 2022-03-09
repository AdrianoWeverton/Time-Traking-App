import { useState } from "react";
import { EditableTimerList } from "./Components/EditableTimer/EditableTimerList";
import { ToggleableTimerForm } from "./Components/ToggleableTimer/ToggleTimer";
import { v4 } from "uuid";
import { newTimer } from "./Helpers/Helpers";

const App = () => {
  const [timers, setTimers] = useState([{
        title: 'Practice squat',
        project: 'Gym Chores',
        id: v4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: v4(),
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  );

  const  handleEditFormSubmit = (attrs) => {updateTimer(attrs)};
  const handleCreateFormSubmit = (timer) => {
    createTimer(timer);
  };
  const handleTrashClick = (timerId) => {
    deleteTimer(timerId);
  };
  const handleStartClick = (timerId) => {
    startTimer(timerId);
  };
  const handleStopClick = (timerId) => {
    stopTimer(timerId);
  };

  const createTimer = (timer) => {
    const t = newTimer(timer);
    setTimers(timers.concat(t));
  };

  const updateTimer = (attrs) => {
    setTimers(timers.map((timer) => {
      if(timer.id === attrs.id) {
        return Object.assign({}, timer, {
          title: attrs.title,
          project: attrs.project,
        });
      } else {
        return timer;
      }
    }))
  };
  const deleteTimer = (timerId) => {
    setTimers(timers.filter(t => t.id !== timerId));
  };
  const startTimer = (timerId) => {
    const now = Date.now();

    setTimers(timers.map((timer) => {
      if(timer.id === timerId) {
        return Object.assign({}, timer, {
          runningSince: now,
        });
      } else {
        return timer;
      }
    }))
  };
  const stopTimer = (timerId) => {
    const now = Date.now();

    setTimers(timers.map((timer) => {
      if(timer.id === timerId) {
        const lastElapsed = now - timer.runningSince;
        return Object.assign({}, timer, {
          elapsed: timer.elapsed + lastElapsed,
          runningSince: null,
        });
      } else {
        return timer;
      }
    }))
  }


  return (
    <div className="flex flex-col items-center my-12">
      <div className="text-4xl font-bold text-center py-2 mb-2">Timers</div>
      <hr className="w-full"/>

      <div className="m-8">
        <EditableTimerList 
          timers={timers}
          onFormSubmit={handleEditFormSubmit}
          onTrashClick={handleTrashClick}
          onStartClick={handleStartClick}
          onStopClick={handleStopClick}
        />
        <ToggleableTimerForm 
          onFormSubmit={handleCreateFormSubmit}
        />
      </div>
    </div>
  )
}


export default App;