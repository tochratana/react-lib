import { Button } from "./components/ui/button";
import { NavigationMenu } from "./components/ui/navigation-menu";
import { NavigationMenuDemo } from "./components/demo/NavigationMenuDemo";
import { TabsDemo } from "./components/demo/TabsDemo";

function App() {
  return (
    <div className="p-5">
      <Button>Hello Shadcn</Button>
      <NavigationMenuDemo />
      <TabsDemo />
    </div>
  );
}

export default App;
