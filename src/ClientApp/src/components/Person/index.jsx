import React from 'react';
import styles from './styles.module.css'
import { MAX_HEIGHT, MAX_WIDTH } from "../../consts/sizes";


export default function Person({ person, onClick }) {
    const x = person.position.x / MAX_WIDTH * 100;
    const y = person.position.y / MAX_HEIGHT * 100;
<<<<<<< HEAD
<<<<<<< HEAD
    const red = '#FF0000'
    const pink = '#d2b1e7'

=======
    const isSick = person.isSick;
>>>>>>> 4d0c1b6ab428290024a93aa63078a7734d670534
=======
    const isSick = person.isSick;
>>>>>>> 4d0c1b6ab428290024a93aa63078a7734d670534
    return (
        <div 
            className={ styles.root }
<<<<<<< HEAD
<<<<<<< HEAD
            style={{ left: `${ x }%`, top: `${ y }%` ,  background: person.isInfected? red: pink}}
=======
=======
>>>>>>> 4d0c1b6ab428290024a93aa63078a7734d670534
            style={
                { 
                    left: `${ x }%`,
                    top: `${ y }%`,
                    backgroundColor: `${isSick ? "red" : "#d2b1e7"}`   
                }
            }
<<<<<<< HEAD
>>>>>>> 4d0c1b6ab428290024a93aa63078a7734d670534
=======
>>>>>>> 4d0c1b6ab428290024a93aa63078a7734d670534
            onClick={ () => onClick(person.id) }
        />
    );
}
