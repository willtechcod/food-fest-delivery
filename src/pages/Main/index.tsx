import { Outlet } from 'react-router-dom';

import { Sidebar } from '../../components/Sidebar';
import { MyOrder } from '../../components/MyOrder'; 

import { Container } from './styles';

import logoImg from '../../assets/logo1.svg';

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} />
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  )
}
