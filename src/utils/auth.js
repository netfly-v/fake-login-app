import { storage } from './localStorage';

const AUTH_KEY = 'auth';

export const auth = {
  set(authStatus) {
    storage.set(AUTH_KEY, authStatus);
  },
  isAuth() {
    return storage.get(AUTH_KEY)
  },
};
