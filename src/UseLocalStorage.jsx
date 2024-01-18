import useLocalStorage from './customHooks/useLocalStorage';

const UseLocalStorage = () => {
  const [userName, setUserName] = useLocalStorage('username', '');
  return (
    <div>
      <p>Username: {userName}</p>
      <input
        type='text'
        placeholder='Enter your username'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
};

export default UseLocalStorage;
