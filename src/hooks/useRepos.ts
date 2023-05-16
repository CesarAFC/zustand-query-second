import { useQuery } from '@tanstack/react-query';
import { Repository } from './types';
import api from '../api/github';

async function fetchRepos() {
    const {data} = await api.get<Repository[]>('/users/CesarAFC/repos');
    return data;
}

export function useFetchRepositories() {
    return useQuery(['repos'], fetchRepos)
}