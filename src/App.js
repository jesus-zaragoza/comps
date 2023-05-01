import Dropdown from "./components/Dropdown";

function App() {
  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Blue', value: 'blue'},
    {label: 'Yellow', value: 'yellow'}
  ]

  return <Dropdown options={options}/>
}

export default App;
