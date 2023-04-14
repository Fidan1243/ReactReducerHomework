import { useReducer } from 'react';
import '../Styles/App.css';
import Reducer from '../Reducers/Reducer';
import WorkerForm from './WorkerForm';
import Workers from './Workers';
// import Matin from './Matin';



function App() {
  const [state, dispatch] = useReducer(Reducer,{worker:{name:'',salary:0,department:''},workers:[]})
  console.log(state);
  const onChange = (e) =>{
    const typeDispatch = e.target.name === "worker" ? "SetUserName" :
    (e.target.name === "salary" ? "SetUserSalary" : "SetUserDepartment");
    dispatch({ type: typeDispatch, value: e.target.value });
  };
  const onSubmit = (e) =>{
    e.preventDefault();
    dispatch({type: 'AddWorker', value: state.worker})
  };
  return (
    <div>
      <Workers workers={state.workers}></Workers>
      <WorkerForm name={state.worker.name} salary={state.worker.salary} department={state.worker.department} onSubmit={onSubmit} onChange={onChange}></WorkerForm>
    </div>
  )


  // const [timer, setTimer] = useState(10)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimer(timer - 1)
  //   }, 1000);

  //   return () => clearInterval(interval)

  // }, [timer])
  
  // return (
  //   <div className='App'>
  //     {timer}
  //   </div>

  // );




  // const [count, setCount] = useState(0);
  // const [val, setVal] = useState(0);


  // useEffect(() => {
  //   console.log(count)
  // }, [count])

  // return (
  //   <div className="App">
  //       {/* <Matin/> */}

  //       <button onClick={() => setCount(count + 1)}>SetCount</button>
  //       <button onClick={() => setVal(val + 1)}>SetVal</button>
  //       <p>{count}</p>
  //       <p>{val}</p>
  //   </div>
  // );
}

export default App;
