import React, { useEffect } from 'react'
import { Modal } from 'antd'
import { useNavigate } from 'react-router-dom'

interface IProps {
    title: string
    message: string
}

const ErrorModal: React.FC<IProps> = ({ title, message }) => {
    const [modal, contextHolder] = Modal.useModal()
    const navigate = useNavigate()

    const mount = () => {
        const instance = modal.error({
            title: title,
            content: message,
            onOk: () => {
                instance.destroy()
                navigate('/')
            },
        })
    }
    useEffect(() => {
        mount()
    })
    return <>{contextHolder}</>
}

export default ErrorModal
