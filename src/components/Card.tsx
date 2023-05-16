import { Repository } from "../hooks/types";
import { useFavoritesReposStore } from "../store/favoritesRepos";

type CardProps = {
    repository: Repository
    isFavorite: boolean
}

function Card( {repository, isFavorite} :CardProps ) {

  const addFavoriteRepo = useFavoritesReposStore(state => state.addFavoriteRepo);
  const removeFavoriteRepo = useFavoritesReposStore(state => state.removeFavoriteRepo);

  const toggleLike = () => {
    if(isFavorite) {
        removeFavoriteRepo(repository.id);
        return
    }
    addFavoriteRepo(repository.id)
    }
  return (
    <div>
    <h1>{repository.name}</h1>
    <button onClick={toggleLike}>{isFavorite ? 'Dislike' : 'Like'}</button>
  </div>
  )
}

export default Card;