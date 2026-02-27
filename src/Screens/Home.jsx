import WelcomeBanner from "./WelcomeBanner";
import CounterSummary from "./CounterSummary";

function Home() {
  return (
    <div className="space-y-6">
      <WelcomeBanner />

      <div className="grid md:grid-cols-2 gap-6">
        <CounterSummary />
      </div>
    </div>
  );
}

export default Home;