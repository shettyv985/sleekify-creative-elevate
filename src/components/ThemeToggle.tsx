
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-primary/10 backdrop-blur-md border border-white/10 hover:bg-primary/20 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "light" ? 
        <Moon className="h-5 w-5 transition-transform duration-300 ease-in-out" /> : 
        <Sun className="h-5 w-5 transition-transform duration-300 ease-in-out animate-spin-slow" />
      }
    </button>
  );
}
