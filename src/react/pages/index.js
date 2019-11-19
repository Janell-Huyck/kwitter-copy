import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import CreateMessage from "./CreateMessage";
import kweedPage from './kweedPage';

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  CreateMessage: { path: "/create-message", component: CreateMessage },
  theKweed: { path: '/messagefeed', component: kweedPage},
  NotFound: { path: "*", component: NotFound },
};
