import React, { useEffect } from 'react'
import { Modal } from 'antd'

const ErrorModal: React.FC = () => {
    const [modal, contextHolder] = Modal.useModal()

    const countDown = () => {
        let secondsToGo = 3

        const instance = modal.error({
            title: 'Error',
            content: `Modal will be closed in ${secondsToGo}.`,
        })

        const timer = setInterval(() => {
            secondsToGo -= 1
            instance.update({
                content: `Modal will be closed in ${secondsToGo}.`,
            })
        }, 1000)

        setTimeout(() => {
            clearInterval(timer)
            instance.destroy()
        }, secondsToGo * 1000)
    }
    useEffect(() => {
        countDown()
    })
    return <>{contextHolder}</>
}

export default ErrorModal
