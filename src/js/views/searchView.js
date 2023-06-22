class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this._clearSearch();
    return query;
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  _clearSearch() {
    this.#parentEl.querySelector('.search__field').value = '';
  }
}

export default new SearchView();
