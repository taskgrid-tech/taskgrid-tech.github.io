"use client"

import { useEffect, useState } from "react"

interface Task {
  id: string
  x: number
  y: number
  status: "pending" | "active" | "complete"
  progress: number
}

export function TaskFlowAnimation() {
  const [tasks, setTasks] = useState<Task[]>([])
  const gridSize = 9
  const cellSize = 40 // Increased from 32 to 40

  // Initialize tasks
  useEffect(() => {
    const initialTasks: Task[] = []
    for (let i = 0; i < 20; i++) {
      initialTasks.push({
        id: `task-${i}`,
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize),
        status: "pending",
        progress: 0,
      })
    }
    setTasks(initialTasks)
  }, [])

  // Animate tasks
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks(prevTasks => 
        prevTasks.map(task => {
          let newTask = { ...task }
          
          // Progress through states
          if (task.status === "pending" && Math.random() < 0.3) {
            newTask.status = "active"
            newTask.progress = 0
          } else if (task.status === "active") {
            newTask.progress += Math.random() * 20
            if (newTask.progress >= 100) {
              newTask.status = "complete"
              newTask.progress = 100
            }
          } else if (task.status === "complete" && Math.random() < 0.1) {
            // Reset task to new position
            newTask = {
              id: task.id,
              x: Math.floor(Math.random() * gridSize),
              y: Math.floor(Math.random() * gridSize),
              status: "pending",
              progress: 0,
            }
          }

          return newTask
        })
      )
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const getTaskColor = (task: Task) => {
    switch (task.status) {
      case "pending":
        return "bg-slate-200 border-slate-300"
      case "active":
        return "bg-sky-100 border-sky-300"
      case "complete":
        return "bg-emerald-100 border-emerald-400"
    }
  }

  const getTaskIcon = (task: Task) => {
    switch (task.status) {
      case "pending":
        return "T"
      case "active":
        return "T"
      case "complete":
        return "✓"
    }
  }

  return (
    <div className="relative w-full h-96">
      {/* Grid Background */}
      <div 
        className="relative grid gap-2 p-8"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${gridSize}, ${cellSize}px)`,
        }}
      >
        {/* Grid cells */}
        {Array.from({ length: gridSize * gridSize }).map((_, index) => (
          <div
            key={index}
            className="border border-slate-100 bg-slate-50/30 rounded transition-colors duration-500"
          />
        ))}

        {/* Tasks */}
        {tasks.map(task => (
          <div
            key={task.id}
            className={`absolute flex items-center justify-center text-sm font-bold rounded-lg border-2 shadow-sm transition-all duration-500 ${getTaskColor(task)} ${
              task.status === "active" ? "task-pulse shadow-md" : ""
            }`}
            style={{
              left: `calc(${task.x * (cellSize + 8)}px + 32px)`,
              top: `calc(${task.y * (cellSize + 8)}px + 32px)`,
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              transform: task.status === "active" ? "scale(1.1)" : "scale(1)",
            }}
          >
            <span className={`${task.status === "complete" ? "text-emerald-600" : task.status === "active" ? "text-sky-600" : "text-slate-500"}`}>
              {getTaskIcon(task)}
            </span>
            {task.status === "active" && (
              <div
                className="absolute bottom-0 left-0 h-1 bg-sky-500 rounded-full transition-all duration-300"
                style={{ width: `${task.progress}%` }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Flow indicators */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-40">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="flowGradient4" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
              <stop offset="30%" stopColor="#0ea5e9" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Main flowing lines - horizontal */}
          <path
            d="M20,100 Q120,140 220,100 T420,140"
            fill="none"
            stroke="url(#flowGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            className="flow-path"
          />
          <path
            d="M40,180 Q140,220 240,180 T440,220"
            fill="none"
            stroke="url(#flowGradient2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="flow-path"
            style={{ animationDelay: '1s' }}
          />
          <path
            d="M60,60 Q160,100 260,60 T460,100"
            fill="none"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            className="flow-path"
            style={{ animationDelay: '2s' }}
          />
          
          {/* Diagonal flowing lines */}
          <path
            d="M80,40 Q180,120 280,80 Q380,160 480,120"
            fill="none"
            stroke="url(#flowGradient3)"
            strokeWidth="2"
            strokeLinecap="round"
            className="flow-path"
            style={{ animationDelay: '0.5s' }}
          />
          <path
            d="M30,240 Q130,160 230,200 Q330,120 430,160"
            fill="none"
            stroke="url(#flowGradient4)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="flow-path"
            style={{ animationDelay: '1.5s' }}
          />
          
          {/* Vertical flowing connections */}
          <path
            d="M150,30 Q170,130 190,230 Q210,330 230,360"
            fill="none"
            stroke="url(#flowGradient2)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="flow-path"
            style={{ animationDelay: '2.5s' }}
          />
          <path
            d="M350,40 Q330,140 310,240 Q290,340 270,370"
            fill="none"
            stroke="url(#flowGradient3)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="flow-path"
            style={{ animationDelay: '3s' }}
          />
          
          {/* Additional curved connections */}
          <path
            d="M100,130 Q200,110 300,150 Q400,190 450,170"
            fill="none"
            stroke="url(#flowGradient4)"
            strokeWidth="2"
            strokeLinecap="round"
            className="flow-path"
            style={{ animationDelay: '0.8s' }}
          />
        </svg>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-slate-200 slide-in">
        <h3 className="text-xs font-semibold text-slate-700 mb-2 border-b border-slate-200 pb-1">Task States</h3>
        <div className="text-xs text-slate-600 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-sm">○</span>
            <span>Pending Task</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sky-500 text-sm">◐</span>
            <span>Active Task</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-sm">●</span>
            <span>Complete Task</span>
          </div>
        </div>
      </div>
    </div>
  )
}
