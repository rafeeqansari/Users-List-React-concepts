import './App.css';
import { UserTableWithLoading } from './components/UserTable';
import { userData } from './mock-data/userData';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {UserTable} from './components/UserTable';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <h1>Users</h1>
        <UserTable users={userData} />
      </main>
    </QueryClientProvider>
    
  );
}

export default App;
