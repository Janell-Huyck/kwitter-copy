import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import CreateMessage from "./CreateMessage";
import MessageFeed from "./MessageFeed";

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  CreateMessage: { path: "/create-message", component: CreateMessage },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  NotFound: { path: "*", component: NotFound }
};
