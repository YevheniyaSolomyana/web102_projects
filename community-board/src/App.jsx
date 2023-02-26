import './App.css';
import Card from './components/Card';
import united242 from './assets/united242.jpeg';
import hhelp from './assets/hhelp.jpeg';
import protest from './assets/protest.jpeg';
import host from './assets/host.png';
import job from './assets/job.jpeg';
import volunteer from './assets/volunteer.png';
import sources from './assets/sources.webp';
import post from './assets/post.png';
import influence from './assets/influence.jpeg';
import petition from './assets/petition.png';
import fight from './assets/fight.png';
import brands from './assets/brands.jpeg';

function App() {
  return (
    <div className="App">
      <h1 id="title">Stand with Ukraine 🇺🇦</h1>
      <div className="container">
        <Card name="Donate" description="Support Ukraine by donating to UNITED24, the initiative of the President of Ukraine." img={united242} link="https://u24.gov.ua/"/>
        <Card name="Humanitarian Help" description="Send humanitarian help, such as food, shelter, medicine, etc." img={hhelp} link="https://supportukrainenow.org/donate/humanitarian-supplies-1"/>
        <Card name="Join a Protest" description="Get latest updates on protests happening domestically and abroad." img={protest} link="https://www.stopputin.net/"/>
        <Card name="Host Ukrainians" description="Provide Ukrainian refugees with a safe place to stay at." img={host} link="https://icanhelp.host/"/>
        <Card name="Hire Ukrainians" description="Offer opportunities to Ukrainians who have lost their jobs because of the war." img={job} link="https://www.jobaidukraine.com/"/>
        <Card name="Smart Volunteer" description="Ready to teach English? Help with the Ukrainian cyber defense? Report russian propaganda?" img={volunteer} link="https://supportukrainenow.org/volo"/>
        <Card name="Know Your Sources" description="Read from trusted sources and share verified information." img={sources} link="https://supportukrainenow.org/read-info-from-the-source"/>
        <Card name="Spead the Word" description="Write a post on social media to request no-fly zone, fundraise campaigns, and " img={post} link="https://supportukrainenow.org/post-on-social-media"/>
        <Card name="Influence Authorities" description="Call! Email! Tell your representetives to help Ukraine NOW!" img={influence} link="https://supportukrainenow.org/influence-authorities-directly"/>
        <Card name="Sign the Petition" description="Show governments your persistence. Make your voice heard by signing the petitions." img={petition} link="https://www.change.org/search?q=ukraine&offset=0"/>
        <Card name="Join the Foreign Legion" description="Fight the russian agression by joining the International Legion today." img={fight} link="https://fightforua.org/"/>
        <Card name="Support Ukrainian Brands" description="Browse through a list of 100 Ukrainian brands to know and support." img={brands} link="https://smartbranding.com/100-ukrainian-brands-to-know-and-support/"/>
      </div>
    </div>
  )
}

export default App
