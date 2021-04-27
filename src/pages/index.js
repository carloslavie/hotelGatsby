import * as React from "react";
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import ImagenHotel from '../components/ImagenHotel';
import ContenidoInicio from '../components/ContenidoInicio';
import HabitacionPreview from '../components/HabitacionPreview';
import useHabitaciones from '../hooks/use-habitaciones';


const ListadoHabitacines = styled.ul`
  max-width: 1200px;
  width:95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;


const IndexPage = () => {

  const habitaciones = useHabitaciones();

  console.log(habitaciones);
  return(
    <Layout>

    <ImagenHotel />
    
    <ContenidoInicio />

    <h2
      css={css`
        text-align:center;
        margin-top:5rem;
        font-size:3rem;
      `}
    >Nuestras habitaciones</h2>
    
    <ListadoHabitacines>
      {habitaciones.map(habitacion =>(
        <HabitacionPreview
        key = {habitacion.id}
        habitacion = {habitacion}
        />
      ))}
    </ListadoHabitacines>
  </Layout>

  )
}

export default IndexPage
