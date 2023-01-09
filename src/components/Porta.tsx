/* eslint-disable react/self-closing-comp */
import React from 'react';
import styles from '../../styles/Porta.module.css';
import PortaModel from '../model/porta';

interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
  const porta = props.value;
  const portaSelecionada = porta.selecionada && !porta.aberta ? styles.selecionada : '';

  const alternarSelecao = e => props.onChange(porta.alternarSelecao())

  const abrirPorta = e => {
    e.stopPropagation()
    props.onChange(porta.abrir())
  }

  const renderizarPorta = () => {
    return (
      <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div className={styles.macaneta} onClick={abrirPorta}></div>
      </div>
    )
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${portaSelecionada}`}>
        { porta.aberta ? false : renderizarPorta() }
      </div>
      <div className={styles.chao}></div>
    </div>
  );
} 
