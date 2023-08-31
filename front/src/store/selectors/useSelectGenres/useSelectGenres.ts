import { useAppSelector } from '../../../hooks/useAppSelector.ts'

import { RootState } from '../../index.ts'

export const useSelectGenres = () =>
    useAppSelector((state: RootState) => state.filter.genres)
