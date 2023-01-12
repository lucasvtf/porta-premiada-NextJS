import React, { use, useEffect, useState } from 'react';
import Link from "next/link"
import {useRouter} from 'next/router'
import styles from '../../../../styles/Jogo.module.css';
import Porta from '../../../components/Porta';
import criarPortas, { atualizarPortas } from '../../../functions/portas';

export default function jogo() {
  const [valido, setValido] = useState(false)
  const [portas, SetPortas] = useState([]);
  const router = useRouter()

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    
    const qtdePortasValida = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas 
    
    setValido(qtdePortasValida && temPresenteValido)
}, [portas, router.query.portas, router.query.temPresente])

  useEffect(() => {
    const numeroDePortas = +router.query.portas
    const temPresente = +router.query.temPresente

    SetPortas(criarPortas(numeroDePortas, temPresente))
  }, [router?.query])

  function renderizarPortas() { 
    return valido && portas.map((porta) => (
      <Porta
        key={porta.numero}
        value={porta}
        onChange={(novaPorta) => SetPortas(atualizarPortas(portas, novaPorta))}
      />
    ));
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {valido ? 
        renderizarPortas() :
        <h2>Valores inválidos</h2>
        }
        </div>
      <div className={styles.botoes}>
        <Link href='/'>
            <button>Reinicar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
