import React, { useEffect } from 'react'
import { Modal } from 'antd'
import { useNavigate } from 'react-router-dom'

const ErrorModal: React.FC = () => {
    const [modal, contextHolder] = Modal.useModal()
    const navigate = useNavigate()

    const countDown = () => {
        const instance = modal.error({
            title: 'Произошла ошибка',
            content: `Запрашиваемой страницы не существует. Вернитесь на главную`,
            onOk: () => {
                instance.destroy()
                navigate('/')
            },
        })
    }
    useEffect(() => {
        countDown()
    })
    return <>{contextHolder}</>
}

export default ErrorModal
