import css from './Searchbar.module.css';
import { Component } from 'react';
import Notiflix from 'notiflix';

class Searchbar extends Component {
    state = {
        searchQuery: '',
      };
      handleInputChange = ({ target: { name, value } }) => {
        this.setState({
          [name]: value,
        });
      };
    
      handleSearchSubmit = e => {
        e.preventDefault();
        if (this.state.searchQuery.trim() === '') {
          Notiflix.Notify.info('Search string is empty!');
          return;
        }
        this.props.onSubmit(this.state.searchQuery);
        this.reset();
      };
    
      reset = () => {
        this.setState({
          searchQuery: '',
        });
      };
    

  render() {
    return (
      <>
        <header className ={css.Searchbar}>
          <form className={css.Form} onSubmit={this.handleSearchSubmit}>
            <button type="submit" className={css.Button}>
              <span className={css.Button_label}>Search</span>
            </button>

            <input
              className={css.Input}
              type="text"
              autocomplete="off"
              name="searchQuery"
              value={this.state.searchQuery}
              autofocus
              placeholder="Search images and photos"
              onChange={this.handleInputChange}
            />
          </form>
        </header>
      </>
    );
  }
}
export default Searchbar;
