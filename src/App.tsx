import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoritesReposStore } from './store/favoritesRepos'

function App() {

  const {data: repos, isLoading} = useFetchRepositories()
  const { favoritesReposId } = useFavoritesReposStore()
  if(isLoading) return <div>Loading...</div>

  return (
    <div>
      {repos?.map((repository) => (
          <Card 
          key={repository.id}
          repository={repository}
          isFavorite={favoritesReposId.includes(repository.id)}
          />
      ))}
    </div>
  );
}

export default App