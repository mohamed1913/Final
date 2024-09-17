import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Single() {
  const { name } = useParams();

  const [single, setSingle] = useState([]);

  useEffect(() => {
    fetch(
      `https://xbellstore.com/itsharks24/blog/api/getpostsbycategory.php?category=${name}`
    )
      .then((r) => r.json())
      .then((data) => setSingle(data));
  }, []);

  const [relat, setRelat] = useState([]);
  useEffect(() => {
    fetch(
      "https://xbellstore.com/itsharks24/blog/api/getrelated.php?category=Sports&id=1"
    )
      .then((r) => r.json())
      .then((reData) => setRelat(reData));
  });

  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch("https://xbellstore.com/itsharks24/blog/api/getrecentpost.php")
      .then((r) => r.json())
      .then((data2) => setAbout(data2));
  }, []);

  const [recent, setRecent] = useState([]);
  useEffect(() => {
    fetch("https://xbellstore.com/itsharks24/blog/api/getrecentpost.php")
      .then((r) => r.json())
      .then((dataReacent) => setRecent(dataReacent));
  }, []);

  return (
    <section class="container">
      <div class="wrapper clear">
        <div class="contentLeft">
          {single.map((item) => (
            <div>
              <div class="singlePostMeta">
                <div class="singlePostTime">{item.date}</div>
                <h1>{item.title}</h1>
                <a href="#" class="singlePostCategory">
                  Lifestyle
                </a>
              </div>
              <div class="singlePostWrap">
                <div class="singlePostImg">
                  <img
                    src={
                      "https://xbellstore.com/itsharks24/blog/admin/" +
                      item.image
                    }
                    alt="Francoise img"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet,{" "}
                  <a href="#">big group of colleagues</a> consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident.
                </p>
              </div>
            </div>
          ))}

          <div class="pageSocial">
            <div class="pageSocialWrapper">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-pinterest"></i>
              </a>
            </div>
          </div>

          {relat.map((re) => (
            <div class="relatedPostsBox">
              <h3>{re.title}</h3>
              <div class="relatedPostsWrap clear">
                <a href="#" class="relatedPostItem">
                  <img
                    src={
                      "https://xbellstore.com/itsharks24/blog/admin/" + re.image
                    }
                    alt="Francoise img"
                  />
                  <div class="overlayBox">
                    <div class="relatedPostDesc">
                      <div class="postTime">{re.date}</div>
                      <h4 style={{ color: "white" }}>
                        <div
                          dangerouslySetInnerHTML={{ __html: re.description }}
                        ></div>
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div class="sidebarRight">
          <div class="sidebar-widget">
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
          </div>
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

          {recent.map((rec) => (
            <div class="sidebar-widget">
              <h3>Recent post</h3>
              <div class="popularPostsWidget">
                <div class="popularPostsWidgetItem">
                  <a href="#" class="popularPostsItemImg">
                    <img
                      src={
                        "https://xbellstore.com/itsharks24/blog/admin/" +
                        rec.image
                      }
                      alt="Francoise img"
                    />
                  </a>
                  <time datetime="2015-05-15">{rec.date}</time>
                  <h4>
                    <a href="#">
                      <div
                        dangerouslySetInnerHTML={{ __html: rec.description }}
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
      <div class="ourInstagram">
        <div id="sb_instagram">
          <div class="sb_instagram_header">
            <a href="#" class="sbi_header_link">
              Follow on instagram
            </a>
          </div>
          <div id="sbi_images">
            <div class="sbi_item sbi_type_image">
              <div class="sbi_photo_wrap">
                <a href="#" class="sbi_photo">
                  <img src="images/content/inst.jpg" alt="Francoise img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Single;
