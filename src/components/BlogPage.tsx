import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Users,
  MoreHorizontal,
  TrendingUp,
  ThumbsUp,
  MessageCircle,
  Share2,
} from "lucide-react";
import logo from "../assets/logo.svg";

export function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/php/get-posts.php")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="space-y-16">
      {/* Header */}
      {/* Hero Banner */}
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

      {/* LinkedIn-style Posts */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {posts.length === 0 ? (
          <div className="text-center text-muted-foreground">
            No posts available.
          </div>
        ) : (
          posts.map((post) => (
            <Card key={post.id} className="bg-white">
              <CardContent className="p-0">
                {/* Post Header */}
                <div className="p-4 pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-12 h-12">
                        <img
                          src={logo}
                          alt="Bridge Medical Logo"
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-1">
                          <h3 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                            Bridge Medical
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600">
                          Medical Consulting
                        </p>
                        <p className="text-xs text-gray-500">
                          {post.date || "Recently"} • 🌍
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 p-1">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Post Content */}
                <div className="px-4 pb-3">
                  <div className="text-gray-900 whitespace-pre-line leading-relaxed">
                    {post.content || post.title}
                  </div>
                </div>

                {/* Post Image */}
                {post.image_url && (
                  <div className="bg-gray-100 flex items-center justify-center text-gray-500">
                    <img
                      src={post.image_url}
                      alt="Post image"
                      className="rounded-lg w-full max-h-96 object-cover"
                    />
                  </div>
                )}

                {/* Engagement Stats */}
                <div className="px-4 py-2 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                          <ThumbsUp className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span>{post.likes || 0}</span>
                      </span>
                      <span>{post.comments || 0} comments</span>
                      <span>{post.shares || 0} shares</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-4 py-2 border-t border-gray-100">
                  <div className="flex items-center justify-around">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 text-gray-600 hover:bg-gray-50"
                      onClick={() => window.open(post.link, "_blank")}
                    >
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Like
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 text-gray-600 hover:bg-gray-50"
                      onClick={() => window.open(post.link, "_blank")}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Comment
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 text-gray-600 hover:bg-gray-50"
                      onClick={() => window.open(post.link, "_blank")}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Follow Suggestion */}
      <Card className="bg-white">
        <CardContent className="p-4 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">
            Follow Bridge Medical
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Stay updated with the latest insights from European medical device
            consulting
          </p>
          <Button className="w-full">+ Follow</Button>
        </CardContent>
      </Card>
    </div>
  );
}
