import React from 'react';

function Group(props) {
  return (
    <div className='group-container'>
      <div className='card'>
        <div className='profile-image'>
          {/* Substitua 'profile.jpg' pela imagem desejada */}
          <img src='profile.jpg' alt='Profile' />
        </div>
        <div className='card-content'>
          <h3 className='name'>{props.title}</h3>
          <p className='role'>{props.group}</p>
          <p className='description'>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Group;
