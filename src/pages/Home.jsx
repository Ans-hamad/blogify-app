import React from "react";
import { Container, PostCard } from "../components/index";
import { useSelector } from "react-redux";
import { ReactTyped } from "react-typed";

const Home = () => {
  const { status, userData } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);

  const userPosts = posts?.filter((post) => post.userId === userData.$id);

  if (!status) {
    return (
      <div className="text-center mt-7">
        <ReactTyped
          className="font-bold text-4xl text-[#2e3944]"
          strings={["Welcome! Log in to write, connect, and explore."]}
          typeSpeed={40}
        />

        <div>
          <ReactTyped
            className="font-semibold"
            strings={[
              "Unleash your voice, explore others, and craft your narrative with our blog platform.",
              "Craft, Connect, and Edit Your Story: Where Blogs Come to Life.",
              "Discover, Create, and Connect through the Power of Blogging.",
            ]}
            typeSpeed={40}
            backSpeed={30}
            attr="placeholder"
            loop
          >
            <input
              type="text"
              size="80"
              className="text-center mt-5 outline-none"
            />
          </ReactTyped>
        </div>
      </div>
    );
  }

  if (status && userPosts.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center text-xl font-medium">
        Add Post
      </div>
    );
  }

  return (
    <div>
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {userPosts?.map((post) => (
            <div key={post.$id}>
              <PostCard
                id={post.$id}
                description={post.content}
                title={post.title}
                featuredImage={post.featuredImage}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
