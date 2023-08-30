import { useAppSelector } from '../../hooks/useAppSelector.ts'

import { RootState } from '../index.ts'

export const useSelectPlatforms = () =>
    useAppSelector((state: RootState) => state.filter.platforms)
