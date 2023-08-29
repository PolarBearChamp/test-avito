//@ts-ignore
import React, { FC } from 'react'
import { Checkbox } from 'antd'
import type { CheckboxValueType } from 'antd/es/checkbox/Group'
import { CheckboxOptionType } from 'antd/es/checkbox/Group'
import cls from './CheckboxGroup.module.scss'

interface IProps {
    options: CheckboxOptionType[]

    // eslint-disable-next-line no-unused-vars
    setValues: (checkedValues: string[]) => void
    values: string[]
}

const CheckboxGroup: FC<IProps> = ({ options, setValues, values }) => {
    const onChange = (checkedValues: CheckboxValueType[]) => {
        console.log('checked = ', checkedValues)
        // @ts-ignore
        setValues(checkedValues)
    }

    return (
        <Checkbox.Group
            onChange={onChange}
            className={cls.CheckboxGroup}
            options={options}
            value={values}
        />
    )
}

export default CheckboxGroup
