//@ts-ignore
import React, { FC, useState } from 'react'
import { useSelectSort } from '../../../store/sort/selectors/useSelectSort.ts'
import { useAppDispatch } from '../../../hooks/useAppDispatch.ts'
import { clsx } from 'clsx'
import cls from './SortMenu.module.scss'
import { sortOptions } from '../../../constants/mock.ts'
import { SortStateItem } from '../../../types'
import { setSort } from '../../../store/sort/sortSlice.ts'

const SortMenu: FC = () => {
    const currentSort = useSelectSort()
    const dispatch = useAppDispatch()

    const [isOpen, setIsOpen] = useState(false)
    const items = sortOptions

    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState)
    }

    const handleItemClick = (item: SortStateItem) => {
        dispatch(setSort(item))
        setIsOpen(false)
    }

    return (
        <div className={clsx(cls.SortMenu, cls.customDropdown)}>
            <div className={cls.dropdownHeader} onClick={toggleDropdown}>
                {currentSort.sort.label}
            </div>
            {isOpen && (
                <ul className={cls.dropdownList}>
                    {Array.from(items.values()).map((item, index) => (
                        <li key={index} onClick={() => handleItemClick(item)}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SortMenu
