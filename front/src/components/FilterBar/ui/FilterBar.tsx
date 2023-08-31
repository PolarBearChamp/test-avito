//@ts-ignore
import React, { FC, useCallback, useState } from 'react'
import cls from './FilterBar.module.scss'
import { Button } from 'antd'
import CheckboxGroup from '../../../shared/CheckboxGroup/CheckboxGroup.tsx'
import { genreOptions, platformOptions } from '../../../constants/mock'
import { clsx } from 'clsx'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { setGenres, setPlatforms } from '../../../store/slices/filterSlice.ts'
import { useAppDispatch } from '../../../hooks/useAppDispatch.ts'
import { useSelectGenres } from '../../../store/selectors/useSelectGenres/useSelectGenres.ts'
import { useSelectPlatforms } from '../../../store/selectors/useSelectPlatforms/useSelectPlatforms.ts'
import { useSelectSort } from '../../../store/selectors/useSelectSort/useSelectSort.ts'
import { SortType } from '../../../types'

interface IProps {
    onReset: () => void
}

const FilterBar: FC<IProps> = ({ onReset }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [isClosed, setIsClosed] = useState(true)
    const dispatch = useAppDispatch()

    const selectedGenres = useSelectGenres()
    const selectedPlatforms = useSelectPlatforms()
    const selectedSort = useSelectSort()
    const onClose = () => {
        setIsClosed((prevState) => !prevState)
    }

    const onCollapse = useCallback(() => {
        setCollapsed((prevState) => !prevState)
    }, [setCollapsed])

    const onTogglePlatforms = (checkedValues: string[]) => {
        dispatch(setPlatforms(checkedValues))
    }

    const onToggleGenres = (checkedValues: string[]) => {
        dispatch(setGenres(checkedValues))
    }

    return (
        <div className={clsx(cls.FilterWidget, { [cls.closed]: isClosed })}>
            <div className={cls.header}>
                <h2>Фильтры</h2>
                {
                    <Button
                        icon={isClosed ? <UpOutlined /> : <DownOutlined />}
                        className={cls.mobile}
                        onClick={onClose}
                    />
                }
            </div>

            <div>
                <div className={cls.subtitle}>Платформа</div>
                <CheckboxGroup
                    options={platformOptions}
                    setValues={onTogglePlatforms}
                    values={selectedPlatforms}
                />
            </div>
            <div>
                <div className={cls.subtitle}>Жанр</div>
                <div className={cls.genreList}>
                    <CheckboxGroup
                        options={
                            collapsed ? genreOptions : genreOptions.slice(0, 6)
                        }
                        setValues={onToggleGenres}
                        values={selectedGenres}
                    />
                    <Button type="link" onClick={onCollapse}>
                        {collapsed ? 'скрыть' : 'показать'}
                    </Button>
                </div>
            </div>
            <div className={cls.controls}>
                <Button
                    type="primary"
                    danger
                    onClick={onReset}
                    disabled={
                        selectedGenres.length === 0 &&
                        selectedPlatforms.length === 0 &&
                        selectedSort.sort.type === SortType.NONE
                    }
                >
                    Сбросить
                </Button>
            </div>
        </div>
    )
}

export default FilterBar
