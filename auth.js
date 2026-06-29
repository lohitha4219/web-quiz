// auth.js - client-side auth using localStorage (no backend)

(() => {

  const AUTH_KEY = 'webquiz_auth_v1';
  const USERS_KEY = 'webquiz_users_v1';

  // Safe JSON parser
  function safeParse(json, fallback) {

    try {
      return JSON.parse(json);
    } 
    
    catch {
      return fallback;
    }
  }

  // Get all stored users
  function getStoredUsers() {

    const users = safeParse(
      localStorage.getItem(USERS_KEY),
      {}
    );

    return users || {};
  }

  // Save users
  function setStoredUsers(users) {

    localStorage.setItem(
      USERS_KEY,
      JSON.stringify(users)
    );
  }

  // Save login session
  function setAuthSession(email) {

    localStorage.setItem(
      AUTH_KEY,
      JSON.stringify({
        email,
        createdAt: Date.now()
      })
    );
  }

  // Get session
  function getAuthSession() {

    return safeParse(
      localStorage.getItem(AUTH_KEY),
      null
    );
  }

  // Remove session
  function clearAuthSession() {

    localStorage.removeItem(AUTH_KEY);
  }

  // Normalize email
  function normalizeEmail(email) {

    return String(email || '')
      .trim()
      .toLowerCase();
  }

  // Hash password
  async function hashPassword(password) {

    const data = new TextEncoder().encode(
      String(password)
    );

    const digest = await crypto.subtle.digest(
      'SHA-256',
      data
    );

    return Array.from(new Uint8Array(digest))
      .map(byte =>
        byte.toString(16).padStart(2, '0')
      )
      .join('');
  }

  // Register user
  async function register({ email, password }) {

    const emailN = normalizeEmail(email);

    if (!emailN) {
      throw new Error('Email is required');
    }

    if (String(password || '').length < 6) {
      throw new Error(
        'Password must be at least 6 characters'
      );
    }

    const users = getStoredUsers();

    // Check existing account
    if (users[emailN]) {
      throw new Error(
        'Account already exists for this email'
      );
    }

    // Hash password
    const passwordHashLike =
      await hashPassword(password);

    // Store user
    users[emailN] = {
      email: emailN,
      passwordHashLike
    };

    setStoredUsers(users);

    // Create login session
    setAuthSession(emailN);

    return {
      email: emailN
    };
  }

  // Login user
  async function login({ email, password }) {

    const emailN = normalizeEmail(email);

    if (!emailN) {
      throw new Error('Email is required');
    }

    if (String(password || '').length < 1) {
      throw new Error('Password is required');
    }

    const users = getStoredUsers();

    const user = users[emailN];

    if (!user) {
      throw new Error(
        'No account found. Please sign up.'
      );
    }

    // Verify password
    const passwordHashLike =
      await hashPassword(password);

    if (
      user.passwordHashLike !==
      passwordHashLike
    ) {
      throw new Error('Incorrect password');
    }

    // Save session
    setAuthSession(emailN);

    return {
      email: emailN
    };
  }

  // Get a session only if it matches a registered user.
  function getValidatedSession() {

    const session = getAuthSession();
    if (!session || !session.email) {
      return null;
    }

    const users = getStoredUsers();

    // If the session email doesn't exist in registered users,
    // invalidate the session.
    if (!users[session.email]) {
      clearAuthSession();
      return null;
    }

    return session;
  }

  // Check login status
  function isLoggedIn() {

    return !!getValidatedSession();
  }

  // Protect pages
  function requireLogin({
    redirectTo = './Login.html',
    loginMessageElId
  } = {}) {

    const session = getValidatedSession();

    if (!session) {

      if (loginMessageElId) {

        const el = document.getElementById(
          loginMessageElId
        );

        if (el) {
          el.textContent =
            'Please log in to start the quiz.';
        }
      }

      window.location.href = redirectTo;

      return false;
    }

    return true;
  }

  // Logout
  function logout() {

    clearAuthSession();
  }

  // Reset password
  async function resetPassword({ email, newPassword }) {

    const emailN = normalizeEmail(email);

    if (!emailN) {
      throw new Error('Email is required');
    }

    if (String(newPassword || '').length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    const users = getStoredUsers();

    const user = users[emailN];
    if (!user) {
      throw new Error('No account found. Please sign up.');
    }

    const passwordHashLike =
      await hashPassword(newPassword);

    users[emailN] = {
      ...user,
      passwordHashLike
    };

    setStoredUsers(users);

    return {
      email: emailN
    };
  }

  // Expose globally
  window.__webquizAuth = {

    register,
    login,
    resetPassword,
    isLoggedIn,
    requireLogin,
    logout,
    getAuthSession,
    clearAuthSession
  };

})();
