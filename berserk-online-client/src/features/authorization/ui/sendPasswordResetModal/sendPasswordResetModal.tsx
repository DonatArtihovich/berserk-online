import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import cls from "./SendPasswordResetModal.module.scss"
import { useAppDispatch, useAppSelector } from "src/shared/lib";
import { IAnimator, useAnimate } from "src/helpers/hooks/useAnimate";
import { Modal, ModalButton, EmailInput } from "src/shared/ui";
import {
    requestPasswordChanging,
    requestPasswordChangingStatusSelector,
} from "src/entities/user";
import { Mode, setMode } from "src/entities/modal";

export const SendPasswordResetModal = () => {
    const { isOpenAnimation, setIsOpenAnimation,
        isCloseAnimation, setIsCloseAnimation }: IAnimator = useAnimate()

    const { user } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const requestPasswordChangingStatus = useAppSelector(requestPasswordChangingStatusSelector)

    const [email, setEmail] = useState<string>(user?.email as string)
    const [emailError, setEmailError] = useState<number>(0)

    const [isReady, setIsReady] = useState<boolean>(false)
    const [intervalID, setIntervalID] = useState<number | null>(null)
    const [time, setTime] = useState<number>(59)

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(t => t - 1)
        }, 1000)

        setIntervalID(interval)
    }, [])

    useEffect(() => {
        if (time <= 0) {
            setIsReady(true)
            clearInterval(intervalID as number)
            setIntervalID(null)
        }
    }, [time])

    const closeModal = () => {
        if (!requestPasswordChangingStatus.isPending) {
            setIsCloseAnimation(true)
            setTimeout(() => dispatch(setMode({ mode: null })), 300)
            document.body.style.overflow = ''
        }
    }

    const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!requestPasswordChangingStatus.isPending) {
            e.preventDefault()
            dispatch(requestPasswordChanging(email))
            const interval = setInterval(() => {
                setTime(t => t - 1)
            }, 1000)

            setIntervalID(interval)
            toast('Письмо отправлено.')
        }
    }

    return (
        <Modal
            isCloseAnimation={isCloseAnimation}
            isOpenAnimation={isOpenAnimation}
            setIsCloseAnimation={setIsCloseAnimation}
            setIsOpenAnimation={setIsOpenAnimation}
            closeModal={closeModal}
            modalClass={Mode.EMAIL}
        >
            <form
                className={cls.EmailForm}
            >
                <h1
                    className={cls.ModalHeader}
                >Сброс пароля</h1>
                <EmailInput
                    email={email}
                    setEmail={setEmail}
                    emailError={emailError}
                    setEmailError={setEmailError}
                />
                <span>На указанный адрес мы отправим Вам письмо для изменения пароля.</span>
                <ModalButton
                    text={isReady
                        ? `Отправить повторно`
                        : `Отправить повторно | ${time}`}
                    isActive={!isReady}
                    onButtonClick={onButtonClick}
                />
            </form>
        </Modal >
    )
}
