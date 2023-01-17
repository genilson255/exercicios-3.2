import React from 'react'

export default function PlayerService() {
  fetchedPlayers: () => {
    return [{id: Math.random(), name: 'Genilson'}];
  }
};
