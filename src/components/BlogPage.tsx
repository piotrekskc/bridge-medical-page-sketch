import React, { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/get-posts.php")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="space-y-16">
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Latest Updates from Bridge Medical
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Follow our team's insights and experiences in European medical
            device consulting
          </p>
        </div>
      </section>

      {/* Posts List */}
      <div className="max-w-4xl mx-auto space-y-8">
        {posts.length === 0 ? (
          <div className="text-center text-muted-foreground">
            No posts available.
          </div>
        ) : (
          posts.map((post) => (
            <Card key={post.id} className="bg-white">
              <CardContent className="p-6">
                <h2 className="font-bold text-lg mb-2">{post.title}</h2>
                <p className="mb-2 text-muted-foreground">{post.content}</p>
                {post.link && (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Read more
                  </a>
                )}
                <div className="text-xs text-gray-400 mt-2">{post.date}</div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
