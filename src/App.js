import UserFinder from './components/UserFinder';
import UsersContext from './store/user-context';
import { DUMMY_USERS } from './store/user-context';

function App() {
  return (
    <UsersContext.Provider value={DUMMY_USERS}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
