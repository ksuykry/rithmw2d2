async function getGiphy(evt) {
  evt.preventDefault();
  let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${evt.target.giph}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
  console.log("got", response);
  return response.data;
}
$("#search-form").on("submit", getGiphy)