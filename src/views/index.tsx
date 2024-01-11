import Cookies from "universal-cookie";
import FeaturesSection from "../context/FeaturesSection";
import HeroSection from "../context/HeroSection";
import LeaderBoardSection from "../context/LeaderBoard";
import SubscriptionsSection from "../context/SubscriptionsSection";
import { useAppDispatch } from "../app/store";
import { setToken } from "../app/token/token";

const HomePage = () => {
  // ** Cookies
  const cookie = new Cookies();
  const dispatch = useAppDispatch();

  const userToken = cookie.get("userLogged");
  dispatch(setToken(userToken));

  return (
    <main className="space-y-32">
      <HeroSection />
      <div className="space-y-12">
        <FeaturesSection />
        <LeaderBoardSection />
        <SubscriptionsSection />
      </div>
    </main>
  );
};

export default HomePage;
