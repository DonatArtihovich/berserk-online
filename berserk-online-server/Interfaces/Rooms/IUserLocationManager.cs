﻿using berserk_online_server.DTO;

namespace berserk_online_server.Interfaces.Rooms
{
    public interface IUserLocationManager
    {
        void ChangeLocation(UserInfo user, IRoom room);
        IRoom GetLocation(UserInfo user);
        void RemoveLocation(UserInfo user);
    }
}
