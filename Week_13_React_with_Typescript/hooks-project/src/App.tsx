import React from 'react';
import './App.css';
import Navbar from './nav';
import ProfileCard from './profile-card';
import { ProfileProvider } from './provider';
import { ThemeProvider } from './theme-provider';
import {ThemeCard} from './theme';

function App() {
  return (
    <div className="App">
      <ProfileProvider initial={{
        name: "User",
        job: "Dev",
        email: "email",
        phone: "phone",
        age: 17,
      }}>
        <Navbar />
        <ProfileCard>
          I AM A PROFILE
        </ProfileCard>
      </ProfileProvider>

      <ThemeProvider>
        <ThemeCard>
          <div>Theme Content</div>
        </ThemeCard>
      </ThemeProvider>
    </div>
  );
}

export default App;

// Create a theme switcher that switches your app between light and dark mode
// 1. Create a card that holds theme info (Theme name, Card Name)
// 2. Create a component called switcher
// 3. Give the switcher component two buttons (One called light mode, the other dark mode)
// 4. Use useContext to manage the state of the theme