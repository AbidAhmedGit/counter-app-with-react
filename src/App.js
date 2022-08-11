import Counter from "./class-components/counter.component";
import CounterTwo from "./class-components/counterTwo.component";
import CounterThree from "./class-components/counterThree.component";
import CounterTest from "./class-components/counterTest.component";
import CounterHooks from "./function-components/counter-hooks.component";
import CounterWithHooksTest from "./function-components/counter-hookTest.component";
import React, {useState} from "react";

export const ThemeContext = React.createContext();
export const MsgContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('red');
  const [msg, setMsg] = useState('this is the msg context')
  // console.log('render app')
  return (
    // <Counter initialCount={0}/>
    // <CounterTwo initialCount={0} />
    // <CounterThree initialCount={0} />
    <>
      <ThemeContext.Provider value={{backgroundColor: theme}}>
        <MsgContext.Provider value={msg}>
        <div>
          <CounterTest initialCount={0}/>
          <CounterHooks initialCount={0} />
        </div>
        <br />
        {/* <CounterWithHooksTest initialCount={0}/> */}
        <button type="submit" onClick={()=>{setTheme(prevTheme => {return prevTheme === 'orange' ? 'red' : 'orange';})}}>Toggle Color</button>
        <span>  </span>
        <button type="submit" onClick={()=>{setMsg(prevMsg => {return prevMsg === 'this is the msg context' ? 'click again to show message' : 'this is the msg context'})}}>{msg === "this is the msg context" ? `Hide Message` : `Show Message`}</button>
        </MsgContext.Provider>
      </ThemeContext.Provider>
    </>

  );
}

export default App;
