import { graphql, useStaticQuery } from 'gatsby';

const useHabitaciones = () => {

    const data = useStaticQuery(graphql`
        query MyQuery {
            allDatoCmsHabitacion {
                nodes {
                    titulo
                    contenido
                    id
                    slug      
                    imagen {
                        gatsbyImageData
                    }
                }
            }
        }    
    `)
    return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
        titulo: habitacion.titulo,
        id: habitacion.id,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen,
        slug: habitacion.slug,
    }));
    
}
 
export default useHabitaciones;