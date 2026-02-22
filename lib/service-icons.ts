import {
  Wrench,
  Layers,
  Home,
  Shield,
  Droplets,
  AlertTriangle,
  LayoutDashboard,
  Triangle,
  type LucideIcon,
} from "lucide-react"
import type { IconName } from "./services-data"

const iconMap: Record<IconName, LucideIcon> = {
  Wrench,
  Layers,
  Home,
  Shield,
  Droplets,
  AlertTriangle,
  LayoutDashboard,
  Triangle,
}

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name]
}
