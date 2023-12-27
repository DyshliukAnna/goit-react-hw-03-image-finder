import css from './Searchbar.module.css';
import { Component } from 'react';

class Searchbar extends Component {
  render() {
    return (
      <>
        <header className ={css.Searchbar}>
          <form className={css.Form}>
            <button type="submit" className={css.Button}>
              <span className={css.Button_label}>Search</span>
            </button>

            <input
              className={css.Input}
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
export default Searchbar;
