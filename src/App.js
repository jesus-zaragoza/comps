import { GoBell } from 'react-icons/go';
import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button secondary outline><GoBell/>OK Dawg</Button>
            </div>
        </div>
    );
}

export default App;