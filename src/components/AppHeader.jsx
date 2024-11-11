import reactLogo from '../assets/react.svg';

export default function AppHeader() {

    const AppName = 'React Task List'

    return (
        <header className="App-header">
            <img src={reactLogo} alt="" />
            <h3>{AppName}</h3>

        </header>
    )
}