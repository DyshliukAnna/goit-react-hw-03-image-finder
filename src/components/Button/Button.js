import css from './Button.module.css';
import { Component } from 'react';

class Button extends Component {
    render() {
        return (
        <>
         <button type ="button" className ={css.Button}>Load more
         </button>
        </>
     )
 }
}
export default Button ;