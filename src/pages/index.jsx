import React, { useState } from 'react';
import Porta from '../components/Porta.tsx';
import PortaModel from '../model/porta.ts';

export default function Home() {
  const [porta, setPorta] = useState(new PortaModel(1));

  return (
    <div>
      <Porta value={porta} onChange={(novaPorta) => setPorta(novaPorta)} />
    </div>
  );
}
