import NextLink from 'next/link';
import { useState } from "react";


export const Menu = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ul className='menu'>
        <li>
          <a href="#">Cadastro</a>
          <ul>
            <li>
              <NextLink href="/cadastros/funcao" passHref>
                Função
              </NextLink>
            </li>
            <li>
              <NextLink href="/cadastros/funcionario" passHref>
                Funcionario
              </NextLink>
            </li>
            <li>
              <NextLink href="/cadastros/produto" passHref>
                Produto
              </NextLink>
            </li>
            <li>
              <NextLink href="/cadastros/servico" passHref>
                Serviço
              </NextLink>
            </li>
            <li>
              <NextLink href="/cadastros/usuario" passHref>
                Usuário
              </NextLink>
            </li>
     
          </ul>
        </li>
        <li>
          <NextLink href="/cliente/lista" passHref>
            Cliente
          </NextLink>

        </li>
        <li>
          <NextLink href="/agendamento" passHref>
            Agendamento
          </NextLink>
        </ li>
      </ul>
    </div>
  )
};


