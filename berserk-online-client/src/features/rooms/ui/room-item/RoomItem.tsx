import { Button } from 'src/shared/ui'
import cls from './RoomItem.module.scss'
import classicalCard from 'src/shared/assets/images/classical-berserk-card.jpg'

interface RoomItemProps {
    room: RoomType
}

export const RoomItem = ({ room }: RoomItemProps) => {
    const roomPlayers = room.players.filter((p) => p)

    const joinRoom = () => {}

    return (
        <div className={cls.RoomItem}>
            <div className={cls.RoomItemImageWrapper}>
                <img className={cls.RoomItemImage} src={classicalCard} alt="" />
            </div>
            <div className={cls.RoomItemInfo}>
                <h3 className={cls.RoomHeader}>{room.name}</h3>
                <div className={cls.RoomParticipantsInfo}>
                    <span>
                        {roomPlayers.length}/{room.players.length} игроков
                    </span>
                </div>
            </div>
            <Button
                title="Присоединиться"
                onClick={joinRoom}
                className={cls.JoinRoomButton}
            />
        </div>
    )
}
