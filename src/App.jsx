import { AudioProvider } from "./contexts/AudioContext";
import { MainRoutes } from "./routes/MainRoutes";

const App = () => {
  return (
    <AudioProvider>
      <MainRoutes />
    </AudioProvider>
  );
};

export default App;
