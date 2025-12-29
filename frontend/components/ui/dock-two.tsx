import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface DockProps {
    className?: string
    items: {
        icon: LucideIcon
        label: string
        onClick?: () => void
    }[]
}

interface DockIconButtonProps {
    icon: LucideIcon
    label: string
    onClick?: () => void
    className?: string
}

const floatingAnimation = {
    initial: { y: 0 },
    animate: {
        y: [-2, 2, -2],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}

const DockIconButton = React.forwardRef<HTMLButtonElement, DockIconButtonProps>(
    ({ icon: Icon, label, onClick, className }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClick}
                className={cn(
                    "relative group p-3 rounded-lg",
                    "hover:bg-gray-100 transition-colors",
                    className
                )}
            >
                <Icon className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
                <span className={cn(
                    "absolute -top-8 left-1/2 -translate-x-1/2",
                    "px-2 py-1 rounded text-xs",
                    "bg-gray-900 text-white",
                    "opacity-0 group-hover:opacity-100",
                    "transition-opacity whitespace-nowrap pointer-events-none"
                )}>
                    {label}
                </span>
            </motion.button>
        )
    }
)
DockIconButton.displayName = "DockIconButton"

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
    ({ items, className }, ref) => {
        return (
            <div ref={ref} className={cn("w-full flex items-center justify-center p-2", className)}>
                <div className="w-full max-w-4xl rounded-2xl flex items-center justify-center relative">
                    <div
                        className={cn(
                            "flex items-center gap-1 p-2 rounded-2xl",
                            "backdrop-blur-lg border",
                            "bg-white/95 border-gray-200"
                        )}
                    >
                        {items.map((item) => (
                            <DockIconButton key={item.label} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
)
Dock.displayName = "Dock"

export { Dock }
