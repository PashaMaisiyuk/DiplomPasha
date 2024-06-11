const API_URL = 'https://api.itbook.store/1.0';

export const fetchBooks = async (page: number = 1) => {
    const response = await fetch(`${API_URL}/new?page=${page}`);
    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }
    const data = await response.json();
    return data.books;
};

export const fetchBookDetails = async (isbn: string) => {
    try {
        const response = await fetch(`${API_URL}/books/${isbn}`);
        if (!response.ok) {
            throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching book details:', error);
        throw error;
    }
};