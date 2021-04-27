exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
            allDatoCmsHabitacion {
                nodes {
                    slug
                }
            }
        }
    `);

    console.log(resultado.data.allDatoCmsHabitacion.nodes);

    if(resultado.errors) {
        reporter.panic('No hubo resultados ', resultado.errors);
    }

    // Si hay paginas, crear los archivos
    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;

    habitaciones.forEach(habitacion => {
        actions.createPage({
            path: habitacion.slug,//esto es porque en el boton indicamos que vaya al slug
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slug: habitacion.slug //esta va a ser una variable de consulta en habitaciones.js. Cpn el context, pasas variables de esta seccion hacia los componentes
            }
        })
    })

    
}