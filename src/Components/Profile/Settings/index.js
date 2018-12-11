import React, { Component } from 'react';
import { Div, Span, Img } from 'glamorous';
import { Subscriber } from 'react-broadcast';

import MdNotifications from 'react-icons/lib/md/notifications';
import MdNowWallpaper from 'react-icons/lib/md/now-wallpaper';
import MdBlock from 'react-icons/lib/md/block';
import MdHelp from 'react-icons/lib/md/help';

import { Header } from '../ProfileInfo';
import { SingleDeckContainer } from '../../ChatBox/ContextBox/contactInfoResults';
import { ChatWallpaper } from './chatWallpaper';
import { Notifications } from './notifications';
import { BlockedContacts } from './blockedContacts';
import { Help } from './help';

const PictureAndName = ({
  status,
  picturePath,
  name,
  handlePictureNameClick
}) => {
  return (
    <Div
      css={{
        height: '16%',
        display: 'grid',
        gridTemplateColumns: '3fr 7fr',
        ':hover': {
          background: '#F4F5F5',
          cursor: 'pointer'
        }
      }}
      onClick={handlePictureNameClick}
    >
      <Div
        css={{
          display: 'grid',
          height: '100%',
          gridTemplateColumns: '1fr',
          justifySelf: 'center',
          alignSelf: 'center'
        }}
      >
        <Img
          css={{
            justifySelf: 'center',
            alignSelf: 'center',
            height: '80px',
            width: '80px',
            borderRadius: '50%'
          }}
          src={picturePath}
          alt=""
        />
      </Div>
      <Div
        css={{
          display: 'grid',
          gridTemplateRows: '5fr 5fr',
          gridGap: '0.4em'
        }}
      >
        <Span css={{ alignSelf: 'end', fontSize: '1.2em' }}>{name}</Span>
        <Span
          css={{
            alignSelf: 'start',
            color: 'rgba(0,0,0,0.6)'
          }}
        >
          {status}
        </Span>
      </Div>
    </Div>
  );
};

export default class ProfileSettings extends Component {
  state = {
    currentView: 'settings'
  };

  handleChatWallpaperClick = _ => {
    this.setState({ currentView: 'chatWallpaper' });
  };

  handleNotificationsClick = _ => {
    this.setState({ currentView: 'notifications' });
  };

  handleBlockedContactsClick = _ => {
    this.setState({ currentView: 'blockedContacts' });
  };

  handleHelpClick = _ => {
    this.setState({ currentView: 'help' });
  };

  handleProfileInfoBackClick = _ => {
    this.setState({ currentView: 'settings' });
  };

  singleDeckContainerData = [
    {
      icon: MdNotifications,
      text: 'Notifications',
      onClick: this.handleNotificationsClick
    },
    {
      icon: MdNowWallpaper,
      text: 'Chat Wallpaper',
      onClick: this.handleChatWallpaperClick
    },
    {
      icon: MdBlock,
      text: 'Blocked',
      onClick: this.handleBlockedContactsClick
    },
    {
      icon: MdHelp,
      text: 'Help',
      onClick: this.handleHelpClick
    }
  ];

  render() {
    // FIXME Split Each Case into a different component
    switch (this.state.currentView) {
      case 'settings':
        const {
          handlePictureNameClick,
          handleProfileInfoBackClick
        } = this.props;

        return (
          <Div
            css={{
              height: '100%',
              background: '#fff'
            }}
          >
            <Header
              title={'Settings'}
              handleProfileInfoBackClick={handleProfileInfoBackClick}
            />
            <Subscriber channel="profile">
              {({ profileData }) => (
                <PictureAndName
                  status={profileData.status}
                  name={profileData.name}
                  picturePath={profileData.picture}
                  handlePictureNameClick={handlePictureNameClick}
                />
              )}
            </Subscriber>
            {this.singleDeckContainerData.map((data, index) => (
              <SingleDeckContainer
                key={index}
                onClick={data.onClick}
                icon={data.icon}
                iconStyle={{ size: '22', color: 'rgba(0,0,0,0.4)' }}
                text={data.text}
                style={{
                  marginTop: '0',
                  boxShadow: '0',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
                }}
              />
            ))}
          </Div>
        );

      case 'notifications':
        return (
          <Notifications
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );

      case 'blockedContacts':
        return (
          <BlockedContacts
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );

      case 'help':
        return (
          <Help handleProfileInfoBackClick={this.handleProfileInfoBackClick} />
        );

      case 'chatWallpaper':
        const {
          handleColorBoxHover,
          handleColorBoxClick,
          handleColorBoxHoverOut,
          hoveredColor,
          selectedColor
        } = this.props;

        return (
          <ChatWallpaper
            hoveredColor={hoveredColor}
            selectedColor={selectedColor}
            handleColorBoxHover={handleColorBoxHover}
            handleColorBoxClick={handleColorBoxClick}
            handleColorBoxHoverOut={handleColorBoxHoverOut}
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );
    }
  }
}
