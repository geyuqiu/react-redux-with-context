import Header from "./components/Header";
import Blog from "./components/Blog";
import { ThemeContext } from "./context/ThemeContext";
import "./styles.css";

const blogData = [
  {
    id: 1,
    title: "First Post",
    teaser: "Some Teaser Text",
    text: "I know words. I have the best words."
  },
  {
    id: 2,
    title: "Second Post  ",
    teaser: "Other teaser Text",
    text: "Despite the constant negative ipsum covfefe"
  },
  {
    id: 3,
    title: "3rd Message",
    teaser: "More Teasers",
    text:
      "We have so many things that we have to do better... and certainly ipsum is one of them."
  },
  {
    id: 4,
    title: "Post 4",
    teaser: "FOURTH TEASER",
    text:
      "I have a 10 year old son. He has words. He is so good with these words it's unbelievable."
  },
  {
    id: 5,
    title: "555555555",
    teaser: "5Teasers5",
    text:
      "If Trump Ipsum weren’t my own words, perhaps I’d be dating it. Does everybody know that pig named Lorem Ipsum?"
  }
];

const initialComments = [
  { id: 1, postId: 1, username: "beheist1", text: "Trump sucks" },
  { id: 2, postId: 1, username: "troll47", text: "Trolly Troll Troll" }
];

export default function App() {
  return (
    <ThemeContext.Provider value="red">
      <div>
        <Header />
        <Blog blogData={blogData} initialComments={initialComments} />
      </div>
    </ThemeContext.Provider>
  );
}
