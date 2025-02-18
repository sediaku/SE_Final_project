const API_URL = 'http://localhost/backend/api/auth';

const authApi = {
    login: async (credentials) => {
        try {
            const response = await fetch(`${API_URL}/login.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            if (data.success && data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
            }

            return data;
        }
        catch (error) {
            throw new Error(data.message || 'Login failed');
        }
    },

    //Add registration APIs

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('token');
    },

    getCurrentUser: () => {
        try {
            const user = localStorage.getItem('user');
            return user ? JSON.parse(user) : null;
        }
        catch (error) {
            console.error('Error getting current user:', error);
            return null;
        }
    },

    isAuthenticated: () => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return !!(token && user);
    },

    getAuthHeader: () => {
        const token = localStorage.getItem('token');
        return token ? { 'Authorization': `Bearer ${token}`} : {};
    },
};

export default authApi;