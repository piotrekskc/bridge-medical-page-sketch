import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";
import {
  Users,
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Share2,
} from "lucide-react";

export function BlogPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically load Tagembed script
    const script = document.createElement("script");
    script.src = "https://widget.tagembed.com/embed.min.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    // Simulate loading (2.5s), adjust as needed for real widget
    const timer = setTimeout(() => {
      setLoading(false);

      // Remove backslashes from widget text
      const widget = document.querySelector(".tagembed-widget");
      if (widget) {
        // Replace \\ in all text nodes inside the widget
        const walker = document.createTreeWalker(widget, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
          node.textContent = node.textContent.replace(/\\/g, "");
        }
      }
    }, 2500);

    // Cleanup script and timer on unmount
    return () => {
      document.body.removeChild(script);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="space-y-10">
      {/* Header */}
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

      {/* Tagembed Widget with Loader */}
      <div
        className="relative min-h-[100px] flex items-center justify-center"
        style={{ width: "100%", height: "100%", overflow: "auto" }}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60 z-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
            <span className="ml-4 text-blue-700 font-medium">
              Loading posts...
            </span>
          </div>
        )}
        <div
          className="tagembed-widget"
          data-widget-id="299805"
          data-website="1"
          style={{ width: "100%", height: "100%", overflow: "auto" }}
        ></div>
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
          <Button
            className="w-full"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/bridge-medical-paul-barratt/",
                "_blank"
              )
            }
          >
            + Follow
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
