import { userContext } from "./context";
import Content from './context-content'
function App() {
    return (
        <userContext.Provider value={'DeMoNiX'}>
            <Content/>
        </userContext.Provider>
    )
}
export default App;

