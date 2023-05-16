import { useFetchRepositories } from "./hooks/useRepos";

function App() {

  const {data: repos, isLoading} = useFetchRepositories()

  if(isLoading) return <div>Loading...</div>

  return (
    <div>
      {repos?.map(repo => (
        <div><h1>Repo</h1></div>
      ))}
    </div>
  )
}

export default App