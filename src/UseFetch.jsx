import useFetch from './customHooks/useFetch';

const UseFetch = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (loading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h2>useFetch customHook</h2>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default UseFetch;
