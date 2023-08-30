import { useAppSelector } from '../../hooks/useAppSelector.ts'

import { RootState } from '../index.ts'

export const useSelectSort = () =>
    useAppSelector((state: RootState) => state.sort)
