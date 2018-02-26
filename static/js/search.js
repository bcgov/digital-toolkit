(function () {
  function displaySearchResults(results, store) {

    // <ul> already on the page
    var searchResults = document.getElementById('result');

    // Are there any results?
    if (results.length) {
      var appendString = '';

      // Iterate over the results
      for (var i = 0; i < results.length; i++) {
        var item = store[results[i].ref];
        appendString += '<div class="result_item">';
        appendString += '<a class="result_wrapper" href="' + item.url + '"><h4 class="result_item_title">' + item.title + '</h4></a>';
        appendString += '<div class="urlStr hidden-xs"><span>' + siteurl + item.url + '</span></div>';
        appendString += '<div class="result_item_description"><div class="snippet">' + item.content.substring(0, 150) + '...</div>';
        appendString += '<div class="description">' + item.description + '</div></div>';
        appendString += '<hr></div>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<p>No results found.</p>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('q');

  if (searchTerm) {
    document.getElementById('keyword').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('content');
      this.field('description');
    });

    // Add the data to lunr
    for (var key in window.store) {
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'description': window.store[key].description,
        'content': window.store[key].content
      });

      var results = idx.search(searchTerm); // Get lunr.js to perform a search
      displaySearchResults(results, window.store);
    }
  }
})();
