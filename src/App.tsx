import { Button } from "@/components/ui/button";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-500 underline">
        Hello world!
      </h1>

      <Button
        variant="outline"
        onClick={() => {
          console.log("Button Test");
        }}
      >
        Button
      </Button>
    </div>
  );
}

export default App;
