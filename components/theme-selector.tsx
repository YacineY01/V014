"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Check } from "lucide-react"
import { useTheme, themes } from "../hooks/use-theme"

export function ThemeSelector() {
  const { currentTheme, setTheme, theme } = useTheme()

  return (
    <Card
      className="bg-gray-800 border shadow-2xl"
      style={{
        borderColor: theme.colors.border,
        boxShadow: `0 25px 50px -12px ${theme.colors.glow}`,
      }}
    >
      <CardHeader
        className="border-b bg-gradient-to-r from-transparent"
        style={{
          borderColor: `${theme.colors.border}30`,
          background: `linear-gradient(to right, ${theme.colors.glow}, transparent)`,
        }}
      >
        <CardTitle className="text-white flex items-center gap-3 text-lg font-bold">
          <Palette className="w-5 h-5" />
          COLOR THEMES
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        {Object.entries(themes).map(([key, themeOption]) => (
          <Button
            key={key}
            onClick={() => setTheme(key)}
            className={`w-full justify-between font-bold border transition-all duration-200 ${
              currentTheme === key ? "text-black" : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
            style={{
              background:
                currentTheme === key
                  ? `linear-gradient(to right, ${themeOption.colors.gradient.from}, ${themeOption.colors.gradient.to})`
                  : "rgb(55, 65, 81)",
              borderColor: themeOption.colors.border,
              color: currentTheme === key ? "black" : "white",
            }}
          >
            <span>{themeOption.name}</span>
            {currentTheme === key && <Check className="w-4 h-4" />}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
