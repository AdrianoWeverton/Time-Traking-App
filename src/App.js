import { EditableTimerList } from "./Components/EditableTimer/EditableTimerList";
import { ToggleableTimerForm } from "./Components/ToggleableTimer/ToggleTimer";

const App = () => {
  return (
    <div className="flex flex-col items-center m-12">
      <div className="text-4xl font-bold text-center py-2">Timers</div>
      <hr className="w-full"/>

      <div className="m-8">
        <EditableTimerList />
        <ToggleableTimerForm 
          isOpen={true}
        />
      </div>
    </div>
  )
}


export default App;