import View from './View.js';
import icons from '../../img/icons.svg';

class DeleteRecipeView extends View {
  _message = 'Recipe has been deleted :(';
  // _parentEl = document.querySelector('.delete-recipe-window');
  _window = document.querySelector('.delete-recipe-window');
  _deleteOverlay = document.querySelector('.delete-overlay');
  _btnDelete = document.querySelector('.btn--delete');
  _btnDeleteClose = document.querySelector('.btn--close-delete-modal');
  _btnDeleteYes = document.querySelector('.btn__yes');
  _btnDeleteNo = document.querySelector('.btn__no');

  constructor() {
    super();
    this._addHandlerHideModal();
  }

  toggleWindow() {
    this._deleteOverlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerHideModal() {
    this._btnDeleteClose.addEventListener(
      'click',
      this.toggleWindow.bind(this)
    );
    this._deleteOverlay.addEventListener('click', this.toggleWindow.bind(this));
    this._btnDeleteNo.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerDeleteYes(handler) {
    this._btnDeleteYes.addEventListener('click', handler);
    // handler();
  }
}

export default new DeleteRecipeView();
