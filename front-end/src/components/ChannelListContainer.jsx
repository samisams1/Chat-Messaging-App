import React from 'react';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';


const SideBar = ({ logout }) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);
const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Medical Pager</p>
    </div>
)
const ChannelListContainer = () => {
  return (
    <div>
      <SideBar/>
      <CompanyHeader/>
    </div>
  )
}

export default ChannelListContainer
