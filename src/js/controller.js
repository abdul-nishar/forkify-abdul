import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarkView from './views/bookmarkView.js';
import addRecipeView from './views/addRecipeView.js';
import deleteRecipeView from './views/deleteRecipeView.js';
import { MODAL_TIMER, FORM_MODAL_TIMER } from './config.js';

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

///////////////////////////////////////
// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    // Update search results to mark selected recipe
    resultsView.update(model.getSearchResultsPage());

    // Loading recipe
    await model.loadRecipe(id);

    // Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

const controlSearchResults = async function () {
  try {
    // Get search query
    const query = searchView.getQuery();
    if (!query) return;
    // Load search query
    await model.loadSearchResults(query);
    // Render search query
    resultsView.render(model.getSearchResultsPage());
    // Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // Render new results
  resultsView.render(model.getSearchResultsPage(goToPage));
  // Render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update new servings in state
  model.updateServings(newServings);
  // Render new servings
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // Changing the bookmarked state of the current recipe

  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);

  // Updating the bookmark button
  recipeView.update(model.state.recipe);

  // Rendering the bookmarks
  controlBookmarks();
};

const controlBookmarks = function () {
  bookmarkView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();
    // Uploading the new recipe
    await model.uploadRecipe(newRecipe);

    // Updating bookmarks and rendering the new recipe
    recipeView.render(model.state.recipe);
    controlBookmarks();
    // Changing ID into url
    window.history.pushState(null, '', `${model.state.recipe.id}`);
    // Showing a success message
    addRecipeView.renderMessage();
    // Rendering search results
    resultsView.render(model.state.search.recipes);

    // Hiding the modal window
    setTimeout(function () {
      addRecipeView.toggleWindow();
      // Inserting new form
      setTimeout(function () {
        addRecipeView.defaultMarkup();
      }, FORM_MODAL_TIMER);
    }, MODAL_TIMER);
  } catch (err) {
    addRecipeView.renderError(err.message);
    // addRecipeView.renderError(err.message);

    // // Inserting new form
    // setTimeout(function () {
    //   addRecipeView.defaultMarkup();
    // }, MODAL_TIMER);
  }
};

const controlDeleteConfirmation = function () {
  deleteRecipeView.toggleWindow();
};

/**
 * @todo Bug-fix - When i unbookmark a recipe and then delete it, the previous bookmark also gets deleted
 */

const controlDeleteRecipe = async function () {
  try {
    // Removing toogle window
    deleteRecipeView.toggleWindow();
    recipeView.renderSpinner();
    await model.deleteRecipe();
    // Showing a success message
    recipeView.renderMessage('Your recipe has been deleted');
    // Rendering bookmarks
    controlBookmarks();
    // Rendering search results
    resultsView.render(model.state.search.recipes);
    window.history.back();
    // window.history.replaceState(null, '', ' ');
  } catch (err) {}
};

const init = function () {
  bookmarkView.addHandlerBookmarks(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  recipeView.addHandlerShowDeleteConfirmation(controlDeleteConfirmation);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  deleteRecipeView.addHandlerDeleteYes(controlDeleteRecipe);
  console.log('Welcome to forkify!');
};

init();
