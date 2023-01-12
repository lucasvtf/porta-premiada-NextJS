import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Formulario.module.css';
import Cartao from '../components/Cartao.tsx';
import EntradaNumerica from '../components/EntradaNumerica.tsx';

export default function Formulario() {
  const [qtdePortas, setQtsPortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Quantidade de Portas"
            value={qtdePortas}
            onChange={(novaQtde) => setQtsPortas(novaQtde)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            text="Porta com Presente?"
            value={comPresente}
            onChange={(novaPortaComPresente) => setComPresente(novaPortaComPresente)}
          />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
