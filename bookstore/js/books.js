let _books = [
        {
            id: 1789,
            title: 'Cangaceiro Javascript: Uma aventura no sertão',
            isbn: 'B074SPWM3J',
            publisher: {
                id: 78,
                name: 'Almeida, Flavio',
            },
            publishedAt: 2017,
            chapters: [
                {
                    id: 1,
                    title: 'Prólogo: era uma vez no sertão.',
                    page: 2,
                },
                {
                    id: 2,
                    title: 'Negociar com o cangaceiro, tem coragem?',
                    page: 14,
                },
                {
                    id: 3,
                    title: 'No cangaço, é ação para todo lado.',
                    page: 58,
                },
            ],
        },
        {
            id: 78915,
            title: 'O monstro que programava',
            isbn: '8341512459',
            publisher: {
                id: 80,
                name: 'Cancelo, Laura',
            },
            publishedAt: 2015,
            chapters: [
                {
                    id: 1,
                    title: 'Era uma vez uma refatoradinha.',
                    page: 3,
                },
                {
                    id: 2,
                    title: 'Compilou, então funciona!',
                    page: 28,
                },
            ],
        },
    ];


/**
 * Gets the books from a "fake" backend api.
 * @param {*} preticate A function used to filter the books to be returned.
 * @returns A response object with an attribute named books which
 *          include all books (or the filtered only).
 */
function getBooks(preticate) {
    const requestId = Math.floor(Math.random() * 10000); // Creates a random request id.
    const requestDate = new Date();  // Gets the current date.

    if (preticate === undefined) {
        preticate = e => true; // If no predicate is defined, then set it to return all books.
    }

    // Filters (if predice is defined) the books.
    let books = _books.filter(preticate);

    let response = {
        id: requestId,
        date: requestDate,
        books: books,
        totalCount: _books.length,
    }

    return response;
}
