import React, { useEffect, useState } from "react";
import axios from "axios";

const TableComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState([]);
  const [postsToShow, setPostsToShow] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setPosts([...posts, ...response.data]);
      setLoading(false); 
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (posts.length > 0 && currentpage == "") {
      setCurrentpage(1);
    }
  }, [posts]);

  const Pagination = () => {
    setLoading(true);
    if (currentpage == 1 && posts.length > 0) {
      const sliceData = posts.slice(0, 20);
      setPostsToShow(sliceData);
      setLoading(false);
    } else if (currentpage == 2 && posts.length > 0) {
      const sliceData = posts.slice(21, 30);
      setPostsToShow(sliceData);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else if (currentpage == 3 && posts.length > 0) {
      const sliceData = posts.slice(31, 50);
      setPostsToShow(sliceData);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    Pagination();
  }, [currentpage]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <table classNameName="table table-bordered mt-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {postsToShow &&
                postsToShow.length > 0 &&
                postsToShow.map((item, index) => {
                  return (
                    <tr>
                      <td>{item?.userId}</td>
                      <td>{item?.title}</td>
                      <td>{item?.body}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center pt-4">
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() => {
                    setCurrentpage(1);
                  }}
                >
                  1
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() => {
                    setCurrentpage(2);
                  }}
                >
                  2
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() => {
                    setCurrentpage(3);
                  }}
                >
                  3
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default TableComponent;
