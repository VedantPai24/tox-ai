// Simulated authentication storage using localStorage

export interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

const USERS_STORAGE_KEY = 'toxai_users';
const CURRENT_USER_KEY = 'toxai_current_user';

// Get all registered users
export function getUsers(): User[] {
  if (typeof window === 'undefined') return [];
  const usersJson = localStorage.getItem(USERS_STORAGE_KEY);
  return usersJson ? JSON.parse(usersJson) : [];
}

// Save a new user
export function saveUser(userData: Omit<User, 'id' | 'createdAt'>): User {
  const users = getUsers();
  
  // Check if email already exists
  if (users.some((u) => u.email.toLowerCase() === userData.email.toLowerCase())) {
    throw new Error('Email already registered');
  }

  const newUser: User = {
    id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    ...userData,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  
  return newUser;
}

// Find user by email
export function findUserByEmail(email: string): User | undefined {
  const users = getUsers();
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

// Validate user credentials
export function validateCredentials(email: string, password: string): User | null {
  const user = findUserByEmail(email);
  
  // For simulation: accept any password if user exists
  // In real app, you'd compare hashed passwords
  if (user) {
    return user;
  }
  
  return null;
}

// Set current logged-in user
export function setCurrentUser(user: User | null): void {
  if (typeof window === 'undefined') return;
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

// Get current logged-in user
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  const userJson = localStorage.getItem(CURRENT_USER_KEY);
  return userJson ? JSON.parse(userJson) : null;
}

// Logout (clear current user)
export function logout(): void {
  setCurrentUser(null);
}

