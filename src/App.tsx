import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";


function App() {

  const {data: repos, isLoading} = useFetchRepositories()

  if(isLoading) return <div>Loading...</div>

  return (
    <div>
      {repos?.map((repository) => (
          <Card repository={repository}/>
      ))}
    </div>
  );
}

export default App