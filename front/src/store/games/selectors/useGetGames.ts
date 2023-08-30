import { RootState } from '../../index.ts'
import { useAppSelector } from '../../../hooks/useAppSelector.ts'

export const useGetGames = () =>
    useAppSelector((state: RootState) => state.games.games)
