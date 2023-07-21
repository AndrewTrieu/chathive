import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import ContentWidget from "./ContentWidget";

const FeedWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    const response = await fetch(`http://localhost:3001/posts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const posts = await response.json();
    dispatch(setPosts({ posts }));
  };

  const getUserPosts = async () => {
    const response = await fetch(`http://localhost:3001/posts/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const posts = await response.json();
    dispatch(setPosts({ posts }));
  };

  useEffect(() => {
    isProfile ? getUserPosts() : getPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          location,
          content,
          profilePicturePath,
          contentPicturePath,
          likes,
          comments,
        }) => (
          <ContentWidget
            key={_id}
            postId={_id}
            userId={userId}
            userName={`${firstName} ${lastName}`}
            location={location}
            content={content}
            profilePicturePath={profilePicturePath}
            contentPicturePath={contentPicturePath}
            likes={likes}
            comments={comments}
          ></ContentWidget>
        )
      )}
    </>
  );
};

export default FeedWidget;
