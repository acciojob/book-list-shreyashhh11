//your JS code here. If required.
// Get DOM elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitBtn = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Add Event Listener to the Submit Button
submitBtn.addEventListener('click', function(e) {
    // Prevent default form submission if wrapped in a form tag
    e.preventDefault();

    // Get the values from the inputs
    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;

    // Basic validation to ensure fields aren't empty
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create a new table row element
    const row = document.createElement('tr');

    // Insert columns inside the row
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    // Append the row to the table body (id="book-list")
    bookList.appendChild(row);

    // Clear the input fields after adding the book
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
});

// Add Event Listener for deleting a book (Event Delegation)
bookList.addEventListener('click', function(e) {
    // Check if the clicked element has the class 'delete'
    if (e.target.classList.contains('delete')) {
        // e.target is the button
        // e.target.parentElement is the <td>
        // e.target.parentElement.parentElement is the <tr>
        e.target.parentElement.parentElement.remove();
    }
});