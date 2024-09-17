import React, { useState, useEffect } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://xbellstore.com/itsharks24/blog/api/getposts.php")
      .then((r) => r.json())
      .then((data) => setPosts(data));
  }, []);

  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch("https://xbellstore.com/itsharks24/blog/api/getrecentpost.php")
      .then((r) => r.json())
      .then((data2) => setAbout(data2));
  }, []);

  return (
    <section class="container mt-5">
      <div class="wrapper clear">
        <div class="clear"></div>
        <div class="contentLeft">
          <div class="blogPostListWrap">
            {posts.map((post) => (
              <div class="blogPostListItem clear">
                <a href="single.html" class="blogPostListImg">
                  <img
                    src={
                      "https://xbellstore.com/itsharks24/blog/admin/" +
                      post.image
                    }
                    alt="Francoise img"
                  />
                </a>
                <div class="blogPostListText">
                  <div class="blogPostListTime">{post.date}</div>
                  <h3>
                    <a href="single.html">
                      {post.title} <br /> {post.writer}
                    </a>
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: post.description }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div class="postPagination">
            <ul class="clear">
              <li class="newPosts">
                <a href="#">New posts</a>
              </li>
              <li class="olderPosts">
                <a href="#">Older posts</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="sidebarRight">
          {about.map((aboutt) => (
            <div class="sidebar-widget">
              <h3>{aboutt.title}</h3>
              <div class="aboutMeWidget">
                <img
                  src={
                    "https://xbellstore.com/itsharks24/blog/admin/" +
                    aboutt.image
                  }
                  alt="Francoise img"
                />
                <div
                  dangerouslySetInnerHTML={{ __html: aboutt.description }}
                ></div>
              </div>
            </div>
          ))}
          <div class="sidebar-widget">
            <h3>follow me</h3>
            <div class="followMeSocialLinks">
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
              <span></span>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <span></span>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <span></span>
              <a href="#">
                <i class="fa fa-heart"></i>
              </a>
              <span></span>
              <a href="#">
                <i class="fa fa-pinterest"></i>
              </a>
              <span></span>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </div>
          </div>

          {about.map((abouttt) => (
            <div class="sidebar-widget">
              <h3>Recent post</h3>
              <div class="popularPostsWidget">
                <div class="popularPostsWidgetItem">
                  <a href="#" class="popularPostsItemImg" />
                  <img
                    style={{ width: "300px" }}
                    src={
                      "https://xbellstore.com/itsharks24/blog/admin/" +
                      abouttt.image
                    }
                    alt="Francoise img"
                  />

                  <time datetime="2015-05-15">{abouttt.date}</time>
                  <h4>
                    <a href="#">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: abouttt.description,
                        }}
                      ></div>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="clear"></div>
    </section>
  );
}

export default Blog;
