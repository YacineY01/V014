"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface Theme {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    glow: string
    text: string
    textSecondary: string
    border: string
    gradient: {
      from: string
      to: string
    }
    particle: string[]
  }
}

export const themes: Record<string, Theme> = {
  classic: {
    name: "Classic Orange",
    colors: {
      primary: "rgb(255, 165, 0)",
      secondary: "rgb(255, 140, 0)",
      accent: "rgb(255, 69, 0)",
      glow: "rgba(255, 165, 0, 0.2)",
      text: "rgb(255, 255, 255)",
      textSecondary: "rgb(200, 200, 200)",
      border: "rgb(255, 165, 0)",
      gradient: {
        from: "rgb(255, 165, 0)",
        to: "rgb(255, 140, 0)",
      },
      particle: ["255, 165, 0", "255, 140, 0", "255, 69, 0", "255, 215, 0"],
    },
  },
  fire: {
    name: "Fire Orange",
    colors: {
      primary: "rgb(255, 69, 0)",
      secondary: "rgb(255, 99, 71)",
      accent: "rgb(220, 20, 60)",
      glow: "rgba(255, 69, 0, 0.2)",
      text: "rgb(255, 255, 255)",
      textSecondary: "rgb(200, 200, 200)",
      border: "rgb(255, 69, 0)",
      gradient: {
        from: "rgb(255, 69, 0)",
        to: "rgb(220, 20, 60)",
      },
      particle: ["255, 69, 0", "255, 99, 71", "220, 20, 60", "255, 20, 147"],
    },
  },
  sunset: {
    name: "Sunset Orange",
    colors: {
      primary: "rgb(255, 215, 0)",
      secondary: "rgb(255, 185, 15)",
      accent: "rgb(255, 140, 0)",
      glow: "rgba(255, 215, 0, 0.2)",
      text: "rgb(255, 255, 255)",
      textSecondary: "rgb(200, 200, 200)",
      border: "rgb(255, 215, 0)",
      gradient: {
        from: "rgb(255, 215, 0)",
        to: "rgb(255, 140, 0)",
      },
      particle: ["255, 215, 0", "255, 185, 15", "255, 140, 0", "255, 165, 0"],
    },
  },
  neon: {
    name: "Neon Orange",
    colors: {
      primary: "rgb(255, 20, 147)",
      secondary: "rgb(255, 105, 180)",
      accent: "rgb(255, 0, 255)",
      glow: "rgba(255, 20, 147, 0.2)",
      text: "rgb(255, 255, 255)",
      textSecondary: "rgb(200, 200, 200)",
      border: "rgb(255, 20, 147)",
      gradient: {
        from: "rgb(255, 20, 147)",
        to: "rgb(255, 0, 255)",
      },
      particle: ["255, 20, 147", "255, 105, 180", "255, 0, 255", "255, 69, 0"],
    },
  },
  dark: {
    name: "Dark Orange",
    colors: {
      primary: "rgb(205, 92, 92)",
      secondary: "rgb(178, 34, 34)",
      accent: "rgb(139, 69, 19)",
      glow: "rgba(205, 92, 92, 0.2)",
      text: "rgb(255, 255, 255)",
      textSecondary: "rgb(200, 200, 200)",
      border: "rgb(205, 92, 92)",
      gradient: {
        from: "rgb(205, 92, 92)",
        to: "rgb(178, 34, 34)",
      },
      particle: ["205, 92, 92", "178, 34, 34", "139, 69, 19", "160, 82, 45"],
    },
  },
}

interface ThemeContextType {
  currentTheme: string
  theme: Theme
  setTheme: (themeName: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState("classic")

  const setTheme = (themeName: string) => {
    setCurrentTheme(themeName)
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, theme: themes[currentTheme], setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
