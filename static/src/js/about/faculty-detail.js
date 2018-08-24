/**
 * CSS of the file
 */
/* eslint no-unused-vars: off */
import style from 'static/dist/css/about/faculty-detail.min.css';
import header from 'static/src/js/components/common/header/index.js';
import detail from 'static/src/pug/components/about/faculty/details.pug';

const facultyId = window.location.pathname.match( /\/about\/faculty\/(\d+)/ )[ 1 ];
const language = new URLSearchParams( window.location.search ).get( 'language' );

fetch( `/api/faculty/${ facultyId }` )
.then( res => res.json() )
/* eslint no-console: 'off' */
.then( ( data ) => {
    console.log( data );
    data.language = language;
    document.getElementById( 'content' ).innerHTML = detail( data );
} );

