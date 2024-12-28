import React from "react";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Adrian",
      },
      _id: 1,
      description: "this is a description",
      image:
        "https://th.bing.com/th/id/R.ed3e69328073eddb019653925da99447?rik=NpPBYY1E47Fm9g&pid=ImgRaw&r=0",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results fro "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-result">No Startups</p>
          )}
        </ul>
      </section>
    </>
  );
}

export default Home;
