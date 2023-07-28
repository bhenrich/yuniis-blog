import React, { useEffect, useState } from "react";
import axios from "axios";

function RSSFeed() {
    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRSSFeed() {
            try {
                const response = await axios.get("/rss-feed"); // Fetch from the proxy server
                const parsedPostList = parseRSSFeed(response.data);
                setPostList(parsedPostList);
                setLoading(false);
            } catch (error) {
                setError("Error fetching RSS feed.");
                setLoading(false);
            }
        }

        fetchRSSFeed();
    }, []);

    function parseRSSFeed(xmlString) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");

        const posts = xmlDoc.getElementsByTagName("item");
        const postList = [];

        for (let i = 0; i < posts.length; i++) {
            const title = posts[i].getElementsByTagName("title")[0].textContent;
            const body = posts[i].getElementsByTagName("description")[0].textContent;
            const pubDate = posts[i].getElementsByTagName("pubDate")[0].textContent;
            const link = posts[i].getElementsByTagName("link")[0].textContent;

            postList.push({
                title: title,
                body: body,
                pubDate: pubDate,
                link: link,
            });
        }

        postList.sort((a, b) => {
            return new Date(b.pubDate) - new Date(a.pubDate);
        });

        return postList;
    }


    function formatDate(dateString) {
        const dateObj = new Date(dateString);
        return dateObj.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
        });
    }

    if (loading) {
        return <div className="text_loading">Loading...</div>;
    }

    if (error) {
        return <div className="text_errormsg">{error}<br />Contact YuNii @ <a href="mailto://benjamin@bhenrich.de">benjamin@bhenrich.de</a></div>;
    }

    return (
        <div className="list_posts">
            {postList.map((post, index) => (
                <div key={index} className="post">
                    <h2 className="post_title post_{index}">
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                            {post.title}
                        </a>
                    </h2>
                    <p className="post_body post_{index}">{post.body}</p>
                    <p className="post_date post_{index}">{formatDate(post.pubDate)}</p>
                </div>
            ))}
        </div>
    );
}

export default RSSFeed;
