import { RootState } from '../../index.ts'
import { useAppSelector } from '../../../hooks/useAppSelector.ts'

export const useSelectGames = () =>
    useAppSelector((state: RootState) => state.games.chunk)
