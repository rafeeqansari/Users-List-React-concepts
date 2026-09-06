import './App.css';
import { UserTableWithLoading } from './components/UserTable';
import { userData } from './mock-data/userData';

function App() {
  return (
    <main>
      <h1>Users</h1>
      <UserTableWithLoading users={userData} isLoading={false} />
    </main>
  );
}

export default App;
