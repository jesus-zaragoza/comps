import Accordion from './components/Accordion'

function App() {

  const items = [
    {
      id: '123k',
      label: 'Can I use React?',
      content: 'Yeah sure'
    },
    {
      id: '13j2',
      label: 'Can I use Python?',
      content: 'Keep on learning'
    }
  ]

  return <Accordion items={items} />;
}

export default App;
