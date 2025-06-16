"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Play,
  Square,
  Trash2,
  Save,
  FolderOpen,
  Settings,
  Flame,
  Terminal,
  FileText,
  Syringe,
  Zap,
  Code,
} from "lucide-react"
import { AnimatedParticles } from "./components/animated-particles"
import { ThemeSelector } from "./components/theme-selector"
import { ThemeProvider, useTheme } from "./hooks/use-theme"

function ExecutorContent() {
  const { theme } = useTheme()
  const [code, setCode] = useState(`-- ╔══════════════════════════════════════╗
-- ║           IGNITE EXECUTOR            ║
-- ║        Premium Script Engine        ║
-- ╚══════════════════════════════════════╝

print("🔥 Ignite Executor Loaded!")
print("Ready for script execution...")

-- Example Script
local Players = game:GetService("Players")
local player = Players.LocalPlayer

print("Player: " .. player.Name)
print("Status: Connected")`)

  const [consoleOutput, setConsoleOutput] = useState([
    { type: "system", message: "🔥 Ignite Executor v2.1.0 - Premium Edition", time: "12:34:56" },
    { type: "success", message: "✓ DLL Injection successful", time: "12:34:57" },
    { type: "success", message: "✓ Game process attached", time: "12:34:58" },
    { type: "info", message: "⚡ Ready for script execution", time: "12:34:59" },
  ])

  const [isExecuting, setIsExecuting] = useState(false)
  const [isAttached, setIsAttached] = useState(true)
  const [showThemeSelector, setShowThemeSelector] = useState(false)

  const handleExecute = () => {
    setIsExecuting(true)
    const newOutput = {
      type: "success" as const,
      message: "🚀 Script executed successfully",
      time: new Date().toLocaleTimeString(),
    }
    setConsoleOutput((prev) => [...prev, newOutput])

    setTimeout(() => {
      setIsExecuting(false)
    }, 1500)
  }

  const handleClear = () => {
    setCode("")
  }

  const handleClearConsole = () => {
    setConsoleOutput([])
  }

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Particles Background */}
      <AnimatedParticles />

      {/* Main Content */}
      <div className="relative z-10 p-6">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Flame className="w-12 h-12 drop-shadow-2xl" style={{ color: theme.colors.primary }} />
                    <div
                      className="absolute inset-0 w-12 h-12 rounded-full blur-xl opacity-30"
                      style={{ backgroundColor: theme.colors.primary }}
                    ></div>
                  </div>
                  <div>
                    <h1
                      className="text-5xl font-black bg-clip-text text-transparent drop-shadow-2xl"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${theme.colors.gradient.from}, ${theme.colors.gradient.to})`,
                      }}
                    >
                      IGNITE
                    </h1>
                    <p className="text-sm font-medium" style={{ color: theme.colors.textSecondary }}>
                      Premium Script Executor
                    </p>
                  </div>
                </div>
                <Badge
                  className="text-black font-bold px-4 py-2 text-sm"
                  style={{
                    background: `linear-gradient(to right, ${theme.colors.gradient.from}, ${theme.colors.gradient.to})`,
                  }}
                >
                  v2.1.0 PREMIUM
                </Badge>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className={`flex items-center gap-3 px-4 py-2 rounded-full border-2`}
                  style={{
                    backgroundColor: isAttached ? theme.colors.glow : "rgba(239, 68, 68, 0.2)",
                    borderColor: isAttached ? theme.colors.border : "rgb(239, 68, 68)",
                    color: isAttached ? theme.colors.textSecondary : "rgb(252, 165, 165)",
                  }}
                >
                  <div
                    className={`w-3 h-3 rounded-full animate-pulse`}
                    style={{ backgroundColor: isAttached ? theme.colors.primary : "rgb(239, 68, 68)" }}
                  />
                  <span className="font-bold text-sm">{isAttached ? "ATTACHED" : "DETACHED"}</span>
                </div>

                <Button
                  onClick={() => setShowThemeSelector(!showThemeSelector)}
                  className="text-black font-bold border-2"
                  style={{
                    background: `linear-gradient(to right, ${theme.colors.gradient.from}, ${theme.colors.gradient.to})`,
                    borderColor: theme.colors.border,
                  }}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  THEMES
                </Button>
              </div>
            </div>
          </div>

          {/* Theme Selector Modal */}
          {showThemeSelector && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="relative">
                <Button
                  onClick={() => setShowThemeSelector(false)}
                  className="absolute -top-2 -right-2 w-8 h-8 p-0 rounded-full bg-red-600 hover:bg-red-700 text-white z-10"
                >
                  ×
                </Button>
                <ThemeSelector />
              </div>
            </div>
          )}

          {/* Main Interface */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Code Editor - Takes up 3 columns */}
            <div className="xl:col-span-3 space-y-6">
              {/* Script Editor */}
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
                  <div className="flex items-center justify-between">
                    <CardTitle
                      className="flex items-center gap-3 text-xl font-bold"
                      style={{ color: theme.colors.text }}
                    >
                      <Code className="w-6 h-6" />
                      SCRIPT EDITOR
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={handleExecute}
                        disabled={isExecuting}
                        className="text-black font-bold px-6 py-2 border-2"
                        style={{
                          background: `linear-gradient(to right, ${theme.colors.gradient.from}, ${theme.colors.gradient.to})`,
                          borderColor: theme.colors.border,
                        }}
                      >
                        {isExecuting ? (
                          <>
                            <Square className="w-5 h-5 mr-2" />
                            EXECUTING...
                          </>
                        ) : (
                          <>
                            <Play className="w-5 h-5 mr-2" />
                            EXECUTE
                          </>
                        )}
                      </Button>

                      <Button
                        onClick={handleClear}
                        className="bg-gray-700 hover:bg-gray-600 font-bold border text-white"
                        style={{
                          borderColor: theme.colors.border,
                        }}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        CLEAR
                      </Button>

                      <Button
                        className="bg-gray-700 hover:bg-gray-600 font-bold border text-white"
                        style={{
                          borderColor: theme.colors.border,
                        }}
                      >
                        <Save className="w-4 h-4 mr-2" />
                        SAVE
                      </Button>

                      <Button
                        className="bg-gray-700 hover:bg-gray-600 font-bold border text-white"
                        style={{
                          borderColor: theme.colors.border,
                        }}
                      >
                        <FolderOpen className="w-4 h-4 mr-2" />
                        LOAD
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="min-h-[500px] bg-gray-900 border-0 font-mono text-sm resize-none focus:ring-2 rounded-none text-white"
                    style={{
                      focusRingColor: theme.colors.border,
                    }}
                    placeholder="-- Enter your Lua script here..."
                  />
                </CardContent>
              </Card>

              {/* Console */}
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
                  <div className="flex items-center justify-between">
                    <CardTitle
                      className="flex items-center gap-3 text-xl font-bold"
                      style={{ color: theme.colors.text }}
                    >
                      <Terminal className="w-6 h-6" />
                      CONSOLE OUTPUT
                    </CardTitle>
                    <Button
                      onClick={handleClearConsole}
                      className="bg-gray-700 hover:bg-gray-600 font-bold border text-white"
                      style={{
                        borderColor: theme.colors.border,
                      }}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      CLEAR
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[250px] bg-gray-900 p-4">
                    <div className="space-y-2">
                      {consoleOutput.map((output, index) => (
                        <div key={index} className="flex items-start gap-3 text-sm font-mono">
                          <span className="font-bold min-w-[70px]" style={{ color: theme.colors.secondary }}>
                            [{output.time}]
                          </span>
                          <span
                            className="font-bold"
                            style={{
                              color:
                                output.type === "success"
                                  ? theme.colors.text
                                  : output.type === "error"
                                    ? "rgb(239, 68, 68)"
                                    : output.type === "system"
                                      ? theme.colors.textSecondary
                                      : theme.colors.primary,
                            }}
                          >
                            {output.message}
                          </span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Injection Panel */}
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
                  <CardTitle className="flex items-center gap-3 text-lg font-bold" style={{ color: theme.colors.text }}>
                    <Syringe className="w-5 h-5" />
                    INJECTION
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <Button
                    className="w-full text-black font-bold py-3 border-2"
                    style={{
                      background: `linear-gradient(to right, ${theme.colors.gradient.from}, ${theme.colors.gradient.to})`,
                      borderColor: theme.colors.border,
                    }}
                  >
                    <Syringe className="w-4 h-4 mr-2" />
                    ATTACH PROCESS
                  </Button>
                  <Button
                    className="w-full bg-gray-700 hover:bg-gray-600 font-bold border text-white py-3"
                    style={{
                      borderColor: theme.colors.border,
                    }}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    AUTO-INJECT
                  </Button>
                </CardContent>
              </Card>

              {/* System Info */}
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
                  <CardTitle className="flex items-center gap-3 text-lg font-bold" style={{ color: theme.colors.text }}>
                    <FileText className="w-5 h-5" />
                    SYSTEM INFO
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-2 text-sm font-mono">
                    <div className="flex justify-between">
                      <span style={{ color: theme.colors.secondary }}>Status:</span>
                      <span className="font-bold" style={{ color: theme.colors.text }}>
                        READY
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: theme.colors.secondary }}>Process:</span>
                      <span className="font-bold" style={{ color: theme.colors.text }}>
                        ROBLOX
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: theme.colors.secondary }}>PID:</span>
                      <span className="font-bold" style={{ color: theme.colors.text }}>
                        12345
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: theme.colors.secondary }}>Memory:</span>
                      <span className="font-bold" style={{ color: theme.colors.text }}>
                        256MB
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Component() {
  return (
    <ThemeProvider>
      <ExecutorContent />
    </ThemeProvider>
  )
}
