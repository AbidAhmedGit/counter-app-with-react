import Counter from "./class-components/counter.component";
import CounterTwo from "./class-components/counterTwo.component";
import CounterThree from "./class-components/counterThree.component";
import CounterTest from "./class-components/counterTest.component";
import CounterHooks from "./function-components/counter-hooks.component";
import CounterWithHooksTest from "./function-components/counter-hookTest.component";

function App() {
  return (
    // <Counter initialCount={0}/>
    // <CounterTwo initialCount={0} />
    // <CounterThree initialCount={0} />
    <>
      <div>
        <CounterTest initialCount={0}/>
        <CounterHooks initialCount={0} />
      </div>
      <br />
      <CounterWithHooksTest initialCount={0}/>
    </>

  );
}

export default App;
