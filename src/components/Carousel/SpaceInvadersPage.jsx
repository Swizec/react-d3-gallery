
import React, { Component } from 'react';
import SpaceInvaders from '../../../modules/space-invaders/src/components/SpaceInvaders';

const SpaceInvadersPage = ({width, height}) => {
    return (
        <SpaceInvaders width={640}
                       height={480}
                       initialEnemies={70} />
    );
}

export default SpaceInvadersPage;
