import React from "react";
import "./Books.css";
import BookCard from "../components/BookCard";

const Books = () => {
  const booksArray = [
    {
      id: 1,
      bookCover:
        "https://images.pexels.com/photos/28530072/pexels-photo-28530072.jpeg",
      title: "The Twin Tower",
      ratingValue: "3.5",
      author: "Amadi Godswill",
      excerpts:
        "The Twin Tower is a story of two lovers whose lives become connected through a mysterious journey filled with adventure and unexpected challenges.",
    },
    {
      id: 2,
      bookCover:
        "https://images.pexels.com/photos/31461816/pexels-photo-31461816.jpeg",
      title: "The Rising Star",
      ratingValue: "4.2",
      author: "Daniel Okafor",
      excerpts:
        "A young dreamer struggles to find his place in the world while chasing his passion and discovering the courage to succeed.",
    },
    {
      id: 3,
      bookCover:
        "https://images.pexels.com/photos/3747279/pexels-photo-3747279.jpeg",
      title: "Whispers in the Dark",
      ratingValue: "4.5",
      author: "Chinonso Eze",
      excerpts:
        "A mysterious discovery changes everything for a young woman as she begins to uncover secrets hidden within her family.",
    },
    {
      id: 4,
      bookCover:
        "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
      title: "Beyond the Horizon",
      ratingValue: "4.0",
      author: "David Williams",
      excerpts:
        "After leaving everything behind, a young traveler embarks on a journey that teaches him about friendship, courage, and purpose.",
    },
    {
      id: 5,
      bookCover:
        "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
      title: "The Last Kingdom",
      ratingValue: "4.7",
      author: "Michael Adeyemi",
      excerpts:
        "A fallen kingdom finds hope in an unlikely hero who must unite its people before an ancient enemy returns.",
    },
    {
      id: 6,
      bookCover:
        "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
      title: "Letters to Tomorrow",
      ratingValue: "3.8",
      author: "Sarah Johnson",
      excerpts:
        "Through a collection of forgotten letters, a young woman discovers the dreams and regrets of someone who lived many years before her.",
    },
    {
      id: 7,
      bookCover:
        "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
      title: "The Silent Forest",
      ratingValue: "4.3",
      author: "Emmanuel James",
      excerpts:
        "A group of friends enters a mysterious forest where nothing is quite what it seems and every decision has a consequence.",
    },
    {
      id: 8,
      bookCover:
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg",
      title: "Chasing Dreams",
      ratingValue: "4.1",
      author: "Blessing Williams",
      excerpts:
        "A young student refuses to give up on her dreams despite the obstacles standing between her and the future she imagines.",
    },
    {
      id: 9,
      bookCover:
        "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
      title: "The Forgotten City",
      ratingValue: "4.6",
      author: "Victor Nnamdi",
      excerpts:
        "An explorer discovers the ruins of a forgotten city and uncovers a secret that could rewrite everything he knows about history.",
    },
    {
      id: 10,
      bookCover:
        "https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg",
      title: "A New Beginning",
      ratingValue: "3.9",
      author: "Grace Adeola",
      excerpts:
        "After facing a difficult chapter in her life, a young woman learns that starting over can be the beginning of something beautiful.",
    },
  ];

  return (
    <div className="books">
      <div className="books-wrapper">
        {booksArray.map((item) => (
          <BookCard
            img={item.bookCover}
            title={item.title}
            ratingValue={item.ratingValue}
            author={item.author}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
