import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import CreateMessage from "./CreateMessage";
import MessageFeed from "./MessageFeed";
import Register from "./Register";

export default {
  Home: { path: "/", component: Home },
  Register: { path: "/register", component: Register },
  Profile: { path: "/profile/:username", component: Profile },
  CreateMessage: { path: "/create-message", component: CreateMessage },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  NotFound: { path: "*", component: NotFound }
};
