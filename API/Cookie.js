import Cookies from 'universal-cookie';

const cookies = new Cookies();

class CookieService {

    set(value) {
        cookies.set('token', value);
    }

    get() {
        return cookies.get('token');
    }

    remove() {
        cookies.remove('token');
    }

}

export default new CookieService();