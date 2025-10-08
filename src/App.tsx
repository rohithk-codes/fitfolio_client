import { Skeleton } from "@/components/ui/skeleton";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <h1 className="text-green-400 m-4 font-bold">Welcome to Fit_Folio</h1>

      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <div className="flex ">
  {Array.from({ length: 5 }).map((_, i) => (
    <div className="p-4 ">
      <SkeletonCard key={i} />
    </div>
  ))}
</div>
       
        <ModeToggle />
      </ThemeProvider>
    </div>
  );
};

export default App;
