# cppreference Static Website with Search

This project is a static version of the cppreference website, providing comprehensive references for C and C++ programming languages. The static site includes all the necessary HTML, CSS, and JavaScript files to browse the content offline.

## Features

- **Comprehensive Reference**: Includes detailed documentation for C and C++ languages, covering various standards and libraries.
- **Search Functionality**: Added search functionality to quickly find terms and headers within the reference.

## Search Functionality

The search functionality is implemented using indices located in the `reference/common/index` folder. It allows users to search for terms and headers within the reference content.

### How to Use

1. **Open the Search Modal**: Click on the search input box at the top of the page to open the search modal.
2. **Type to Search**: Start typing in the search input box within the modal. The search results will be displayed as you type.
3. **View Results**: Click on any search result to navigate to the corresponding page.

### Technical Details

- **Indices**: The search functionality uses `searchIndex` and `headersIndex` to find relevant terms and headers.
- **Debounce**: The search input is debounced to improve performance, reducing the number of search operations performed as the user types.

## File Structure

- `index.html`: The main entry point for the static site.
- `common/`: Contains common assets like CSS, JavaScript, and indices for search functionality.
- `cpp/`: Contains C++ reference documentation.
- `c/`: Contains C reference documentation.

## How to Run

1. Clone the repository using the following command:

```bash
git clone https://github.com/yusufarsln98/cppreference-offline-with-search.git
```

2. Open the `index.html` file in a web browser.
3. Use the navigation links to browse the reference content.
4. Use the search functionality to quickly find specific terms or headers.

## Acknowledgements

This project is based on the content from [cppreference.com](https://en.cppreference.com/), a free online reference for C and C++ languages.
