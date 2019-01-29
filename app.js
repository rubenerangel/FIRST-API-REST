const express = require( 'express' );
const app = express();

app.get( '/', ( req,res ) => {
    res.send( 'Recibido' );
});

app.post( '/', ( req,res ) => {
    res.send( 'Guardando' );
});

app.put( '/', ( req,res ) => {
    res.send( 'Actualizando..' );
});

app.delete( '/', ( req,res ) => {
    res.send( 'Eliminando...' );
});

app.listen( 3000, () => {
    console.log( 'Server on port 3000' );
});

