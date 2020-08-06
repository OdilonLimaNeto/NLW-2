import React from 'react';

import whatappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'
function TeacherItem() {
  return(
    <article className="teacher-item">
        <header>
          <img src="https://avatars1.githubusercontent.com/u/51898473?s=460&u=b90e299a04d6d7b510c4eee33230a3760c887ebe&v=4" alt="Odilon Lima"/>
          <div>
            <strong>Odilon Lima</strong>
            <span>Javascript</span>
          </div>
        </header>
        <p>
          Entusiasta das melhores tecnologias de química avançada.
          <br/><br/>
          Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>

        <footer>
          <p>
            Preco/hora
            <strong>R$20,00</strong>
          </p>
          <button type="button">
            <img src={whatappIcon} alt="Whatsapp"/>
            Entrar em contato
          </button>
        </footer>
  </article>
  );
}

export default TeacherItem;