import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import CreateMessage from "./CreateMessage";

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  CreateMessage: { path: "/create-message", component: CreateMessage },
  NotFound: { path: "*", component: NotFound }
};
