import "./App.css";
import Nav from "./Component/Navbar/NavBar";
import MovieList from "./Component/Movielist/MovieList";
import React, {useState} from "react";
import {Switch, Route} from "react-router-dom";
import DescTrailer from "./Component/DescTrailer/DescTrailer";
import Err from "./Component/Error/Error";
function App() {
  const [movielist, setMovielist] = useState([
    {
      id: Math.random(),
      image:
        "https://i.pinimg.com/originals/58/fc/e3/58fce3b346bf7b55a5bf622901b1d0e4.jpg",
      rating: 4,
      name: "Death Note",

      type: "Mystery | Police | Psychological | Supernatural | Thriller",
      description:
        "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
      trailer: "https://www.youtube.com/embed/NlJZ-YgAt-c",
    },
    {
      id: Math.random(),
      image:
        "https://gogocdn.net/cover/chainsaw-man-1664388043.png",
      rating: 5,
      name: "Chainsaw Man",

      type: "Action | Adventure | Demons| Gore | Shounen",
      description:
        "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash. Unfortunately, he has outlived his usefulness and is murdered by a devil in contract with the yakuza. However, in an unexpected turn of events, Pochita merges with Denji's dead body and grants him the powers of a chainsaw devil. Now able to transform parts of his body into chainsaws, a revived Denji uses his new abilities to quickly and brutally dispatch his enemies. Catching the eye of the official devil hunters who arrive at the scene, he is offered work at the Public Safety Bureau as one of them. Now with the means to face even the toughest of enemies, Denji will stop at nothing to achieve his simple teenage dreams.",
      trailer: "https://www.youtube.com/embed/l96zmDlWCBk",
    },
    {
      id: Math.random(),
      image:
        "https://gogocdn.net/cover/bleach-sennen-kessen-hen-1664387572.png",
      rating: 4,
      name: "Bleach: Sennen Kessen-hen",

      type: " Action | Adventure | Fantasy",
      description:
        "Was it all just a coincidence, or was it inevitable? Ichigo Kurosaki gained the powers of a Soul Reaper through a chance encounter. As a Substitute Soul Reaper, Ichigo became caught in the turmoil of the Soul Society, a place where deceased souls gather. But with help from his friends, Ichigo overcame every challenge to become even stronger.",
      trailer: "https://www.youtube.com/embed/1sygUhb8Q2Y",
    },
    {
      id: Math.random(),
      image:
        "https://s1.zerochan.net/Ousama.Ranking.600.3467527.jpg",
      rating: 4,
      name: "Oussama Ranking",

      type: " Adventure | Comedy | Fantasy | Historical | Seinen",
      description:
        "The web manga centers around Bojji, a deaf, powerless prince who cannot even wield a children's sword. As the firstborn son, he strives hard and dreams of becoming the world's greatest king. However, people mutter about him behind his back as 'a good-for-nothing prince' and 'no way he can be king.' Bojji is able to make his first ever friend, 'Kage'(shadow)—a literal shadow on the ground who somehow understands Bojji well. (Kage is a survivor of the Kage assassin clan that was all but wiped out. No longer a killer, Kage now makes ends meet by stealing.) The story follows Bojji's coming-of-age as he meets various people in his life, starting with his fateful encounter with Kage.",
      trailer: "https://www.youtube.com/embed/Tr1ahorojPg",
    },
    {
      id: Math.random(),
      image:
        "https://i.pinimg.com/originals/41/54/81/4154813026c70fe8674e2d1d46515450.png",
      rating: 3,
      name: "Steins Gate",

      type: "Sci-Fi | Thriller",
      description:
        "The story of Steins;Gate takes place in Akihabara and is about a group of friends who have managed to customize their microwave into a device that can send text messages to the past. As they perform different experiments, an organization named SERN who has been doing their own research on time travel tracks them down and now the characters have to find a way to avoid being captured by them.",
      trailer: "https://www.youtube.com/embed/kUkcQb-K3KU",
    },
    {
      id: Math.random(),
      image:
        "https://i.pinimg.com/originals/37/0d/b8/370db87083606d66ee4ce526f23620fd.jpg",
      rating: 5,
      name: "Akam Ga Kill!",

      type: "Action | Adventure |Fantasy",
      description:
        "Tatsumi is a fighter who sets off to the Capital in search of a way to make money to assist his poverty-stricken village. After falling victim to a robbery by a woman and losing all his money, Tatsumi is taken in by a noble aristocratic girl by the name of Aria. In the following night, Aria's place is attacked by a group of assassins known as Night Raid. While Tatsumi at first tries to defend Aria from the assassin Akame, another member of the group stops the fight. She reveals that Aria has kidnapped several villagers and tortures them for fun. Shocked upon seeing the tortured villagers — including his two best friends, Tatsumi kills Aria. Seeing potential in Tatsumi, Night Raid invites the boy to their group warning that regardless of how they want to assassin corrupted people, they are murderers. Tatsumi accepts in order to become stronger and protect his village. In their fight against the Empire, Night Raid starts antagonizing an organization known as The Jaegars led by Esdeath, the most powerful fighter in the Empire. As both Night Raid and Jaegars suffer losses, the Empire forms a new secret police force, the Wild Hunt, with the son of the Prime Minister, Shura, as its leader, to bolster its law reinforcements, though Wild Hunt heavily abuses its new authority by killing innocent civilians for fun.",
      trailer: "https://www.youtube.com/embed/sCGWxQuSoDU",
    },
    {
      id: Math.random(),
      image:
        "https://gogocdn.net/cover/boku-no-hero-academia-6th-season-1664387814.png",
      rating: 5,
      name: "Boku No Hero Academia",

      type: " Action | Comedy | School | Shounen | Super Power ",
      description:
        "Midoriya Izuku was just a regular middle school student in a world where people with superpowers known as Quirks are the norm. However, he dreams of one day becoming a Hero, despite being bullied by his classmates for not having a Quirk. After being the only one to try and save his childhood friend, Katsuki, from a Villain, All Might, the world's greatest Hero, bestows upon him his own quirk, One For All. The story follows Izuku's entrance into Yuuei High School, a school that cultivates the next generation of Heroes.",
      trailer: "https://www.youtube.com/embed/9Y_eKiT-irU",
    },
  ]);
  const [searchRating, setsearchRating] = useState(0);
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({});

  const handleMovie = (x) => {
    setMovie(x);
  };
  return (
    <div>
      <Nav
        setsearchRating={setsearchRating}
        setSearch={setSearch}
        handleMovie={handleMovie}
        setMovielist={setMovielist}
        movielist={movielist}
      />

      <Switch>
        <Route path="/Description/:id" component={DescTrailer} />
        <Route
          exact
          path="/"
          render={(props) => (
            <MovieList
              searchRating={searchRating}
              movielist={movielist}
              search={search}
              {...props}
            />
          )}
        />
        <Route path="/*" component={Err} />
      </Switch>
    </div>
  );
}

export default App;
