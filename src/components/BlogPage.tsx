import React, { useState } from "react";
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
  const [posts] = useState([
    {
      id: "urn:li:ugcPost:1234567890123456789",
      author: {
        id: "urn:li:organization:987654321",
        name: "Bridge Medical",
        logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGeVzHUMroZgg/company-logo_200_200/company-logo_200_200/0/1716200174821?e=1759968000&v=beta&t=_0zXxkhx5U6Tl33WRw3ylTX_X46i5QjlyLPf2QmSRMY",
        verified: true,
        title: "Medical Consulting",
      },
      created: "2025-09-08T10:15:00Z",
      lastModified: "2025-09-08T10:15:00Z",
      content: {
        text: "🧠​Lecanemab (Leqembi): A True Breakthrough in Alzheimer's Disease Treatment...\n\n🇪🇺​In April of this year, the medical world received exciting news: the European Medicines Agency (EMA) approved Lecanemab (marketed as Leqembi) for the treatment of early-stage Alzheimer's disease. This marks a historic moment, as it's the first therapy in the European Union approved to modify the course of the disease rather than just manage its symptoms.\n\n🔬​How does Lecanemab work?\n​Alzheimer's is closely linked to the buildup of beta-amyloid, a protein that forms toxic plaques and damages neurons in the brain. Many previous therapies targeted mature plaques. Lecanemab works differently. It is a monoclonal antibody that binds to and neutralizes beta-amyloid protofibrils—small, soluble, and highly toxic protein aggregates believed to be the primary cause of neuronal damage.\n​By removing these harmful substances early on, Lecanemab helps slow down disease progression, preserving the patient's cognitive functions. 🧠✨\n\n📈​Key Findings from Clinical Trials\n​The EMA's decision was based on the results of the Phase III clinical trial, Clarity AD, which showed that patients receiving Lecanemab had a 27% slower rate of cognitive decline compared to the placebo group. While it's not a cure, slowing the disease's progression can translate into months or even years of a better quality of life for patients and their families.\n\n🌍​What's Next?\n​The EMA's approval is just the beginning. The scientific and medical community now faces the challenge of implementing and monitoring the drug in real-world clinical practice. The availability of the drug in individual EU member states will depend on the decisions of local agencies.\n\n​References:\n​European Medicines Agency (EMA) - Leqembi Approval Information: https://lnkd.in/diMNB3Td\n​Article in The New England Journal of Medicine (NEJM) on the Clarity AD trial: https://lnkd.in/eVVdG8GR\n​",
        media: [
          {
            type: "IMAGE",
            url: "https://media.licdn.com/dms/image/v2/D4D22AQGNw98CPdUobA/feedshare-shrink_800/B4DZkO6AXzH4Ak-/0/1756891712814?e=1759968000&v=beta&t=yrF8i9fa2f2Rn-HrzkC1DZuWf_g326lPJ6v1h61NL10",
            alt: "Lecanemab illustration",
          },
        ],
        links: [
          {
            url: "https://lnkd.in/diMNB3Td",
            title: "EMA Approval Information",
          },
          {
            url: "https://lnkd.in/eVVdG8GR",
            title: "NEJM Clarity AD trial",
          },
        ],
        hashtags: [
          "Lecanemab",
          "Leqembi",
          "AlzheimersDisease",
          "Neurology",
          "EMA",
          "Breakthrough",
          "Medicine",
          "ClinicalTrials",
          "BridgeMedical",
        ],
      },
      visibility: "PUBLIC",
      permalink:
        "https://www.linkedin.com/posts/bridge-medical-paul-barratt_lecanemab-leqembi-alzheimersdisease-activity-7368991195114483714-l1Mh/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6S1E8BDWSdo5lvhJ08mgXomnkB1L5_HSk",
      engagement: {
        likes: 120,
        comments: 15,
        shares: 8,
        views: 2500,
      },
      comments: [],
      sponsored: false,
      language: "en",
      geo: {
        country: "PL",
        city: "Warsaw",
      },
    },
    {
      id: "urn:li:ugcPost:1234567890123456789",
      author: {
        id: "urn:li:organization:987654321",
        name: "Bridge Medical",
        logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGeVzHUMroZgg/company-logo_200_200/company-logo_200_200/0/1716200174821?e=1759968000&v=beta&t=_0zXxkhx5U6Tl33WRw3ylTX_X46i5QjlyLPf2QmSRMY",
        verified: true,
        title: "Medical Consulting",
      },
      created: "2025-09-08T10:15:00Z",
      lastModified: "2025-09-08T10:15:00Z",
      content: {
        text: "🧠​Lecanemab (Leqembi): A True Breakthrough in Alzheimer's Disease Treatment...\n\n🇪🇺​In April of this year, the medical world received exciting news: the European Medicines Agency (EMA) approved Lecanemab (marketed as Leqembi) for the treatment of early-stage Alzheimer's disease. This marks a historic moment, as it's the first therapy in the European Union approved to modify the course of the disease rather than just manage its symptoms.\n\n🔬​How does Lecanemab work?\n​Alzheimer's is closely linked to the buildup of beta-amyloid, a protein that forms toxic plaques and damages neurons in the brain. Many previous therapies targeted mature plaques. Lecanemab works differently. It is a monoclonal antibody that binds to and neutralizes beta-amyloid protofibrils—small, soluble, and highly toxic protein aggregates believed to be the primary cause of neuronal damage.\n​By removing these harmful substances early on, Lecanemab helps slow down disease progression, preserving the patient's cognitive functions. 🧠✨\n\n📈​Key Findings from Clinical Trials\n​The EMA's decision was based on the results of the Phase III clinical trial, Clarity AD, which showed that patients receiving Lecanemab had a 27% slower rate of cognitive decline compared to the placebo group. While it's not a cure, slowing the disease's progression can translate into months or even years of a better quality of life for patients and their families.\n\n🌍​What's Next?\n​The EMA's approval is just the beginning. The scientific and medical community now faces the challenge of implementing and monitoring the drug in real-world clinical practice. The availability of the drug in individual EU member states will depend on the decisions of local agencies.\n\n​References:\n​European Medicines Agency (EMA) - Leqembi Approval Information: https://lnkd.in/diMNB3Td\n​Article in The New England Journal of Medicine (NEJM) on the Clarity AD trial: https://lnkd.in/eVVdG8GR\n​",
        media: [
          {
            type: "IMAGE",
            url: "https://media.licdn.com/dms/image/v2/D4D22AQGNw98CPdUobA/feedshare-shrink_800/B4DZkO6AXzH4Ak-/0/1756891712814?e=1759968000&v=beta&t=yrF8i9fa2f2Rn-HrzkC1DZuWf_g326lPJ6v1h61NL10",
            alt: "Lecanemab illustration",
          },
        ],
        links: [
          {
            url: "https://lnkd.in/diMNB3Td",
            title: "EMA Approval Information",
          },
          {
            url: "https://lnkd.in/eVVdG8GR",
            title: "NEJM Clarity AD trial",
          },
        ],
        hashtags: [
          "Lecanemab",
          "Leqembi",
          "AlzheimersDisease",
          "Neurology",
          "EMA",
          "Breakthrough",
          "Medicine",
          "ClinicalTrials",
          "BridgeMedical",
        ],
      },
      visibility: "PUBLIC",
      permalink:
        "https://www.linkedin.com/posts/bridge-medical-paul-barratt_lecanemab-leqembi-alzheimersdisease-activity-7368991195114483714-l1Mh/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6S1E8BDWSdo5lvhJ08mgXomnkB1L5_HSk",
      engagement: {
        likes: 120,
        comments: 15,
        shares: 8,
        views: 2500,
      },
      comments: [],
      sponsored: false,
      language: "en",
      geo: {
        country: "PL",
        city: "Warsaw",
      },
    },
    {
      id: "urn:li:ugcPost:1234567890123456789",
      author: {
        id: "urn:li:organization:987654321",
        name: "Bridge Medical",
        logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGeVzHUMroZgg/company-logo_200_200/company-logo_200_200/0/1716200174821?e=1759968000&v=beta&t=_0zXxkhx5U6Tl33WRw3ylTX_X46i5QjlyLPf2QmSRMY",
        verified: true,
        title: "Medical Consulting",
      },
      created: "2025-09-08T10:15:00Z",
      lastModified: "2025-09-08T10:15:00Z",
      content: {
        text: "🧠​Lecanemab (Leqembi): A True Breakthrough in Alzheimer's Disease Treatment...\n\n🇪🇺​In April of this year, the medical world received exciting news: the European Medicines Agency (EMA) approved Lecanemab (marketed as Leqembi) for the treatment of early-stage Alzheimer's disease. This marks a historic moment, as it's the first therapy in the European Union approved to modify the course of the disease rather than just manage its symptoms.\n\n🔬​How does Lecanemab work?\n​Alzheimer's is closely linked to the buildup of beta-amyloid, a protein that forms toxic plaques and damages neurons in the brain. Many previous therapies targeted mature plaques. Lecanemab works differently. It is a monoclonal antibody that binds to and neutralizes beta-amyloid protofibrils—small, soluble, and highly toxic protein aggregates believed to be the primary cause of neuronal damage.\n​By removing these harmful substances early on, Lecanemab helps slow down disease progression, preserving the patient's cognitive functions. 🧠✨\n\n📈​Key Findings from Clinical Trials\n​The EMA's decision was based on the results of the Phase III clinical trial, Clarity AD, which showed that patients receiving Lecanemab had a 27% slower rate of cognitive decline compared to the placebo group. While it's not a cure, slowing the disease's progression can translate into months or even years of a better quality of life for patients and their families.\n\n🌍​What's Next?\n​The EMA's approval is just the beginning. The scientific and medical community now faces the challenge of implementing and monitoring the drug in real-world clinical practice. The availability of the drug in individual EU member states will depend on the decisions of local agencies.\n\n​References:\n​European Medicines Agency (EMA) - Leqembi Approval Information: https://lnkd.in/diMNB3Td\n​Article in The New England Journal of Medicine (NEJM) on the Clarity AD trial: https://lnkd.in/eVVdG8GR\n​",
        media: [
          {
            type: "IMAGE",
            url: "https://media.licdn.com/dms/image/v2/D4D22AQGNw98CPdUobA/feedshare-shrink_800/B4DZkO6AXzH4Ak-/0/1756891712814?e=1759968000&v=beta&t=yrF8i9fa2f2Rn-HrzkC1DZuWf_g326lPJ6v1h61NL10",
            alt: "Lecanemab illustration",
          },
        ],
        links: [
          {
            url: "https://lnkd.in/diMNB3Td",
            title: "EMA Approval Information",
          },
          {
            url: "https://lnkd.in/eVVdG8GR",
            title: "NEJM Clarity AD trial",
          },
        ],
        hashtags: [
          "Lecanemab",
          "Leqembi",
          "AlzheimersDisease",
          "Neurology",
          "EMA",
          "Breakthrough",
          "Medicine",
          "ClinicalTrials",
          "BridgeMedical",
        ],
      },
      visibility: "PUBLIC",
      permalink:
        "https://www.linkedin.com/posts/bridge-medical-paul-barratt_lecanemab-leqembi-alzheimersdisease-activity-7368991195114483714-l1Mh/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6S1E8BDWSdo5lvhJ08mgXomnkB1L5_HSk",
      engagement: {
        likes: 120,
        comments: 15,
        shares: 8,
        views: 2500,
      },
      comments: [],
      sponsored: false,
      language: "en",
      geo: {
        country: "PL",
        city: "Warsaw",
      },
    },
  ]);

  return (
    <div className="space-y-16">
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

      {/* LinkedIn-style Posts */}
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
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
                          src={post.author.logo}
                          alt="Logo"
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-1">
                          <h3 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                            {post.author.name}
                          </h3>
                          {post.author.verified && (
                            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {post.author.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(post.created).toLocaleDateString()} • 🌍{" "}
                          {post.geo.city}, {post.geo.country}
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
                    {post.content.text}
                  </div>
                  {/* Hashtags */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {post.content.hashtags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {/* Links */}
                  <div className="mt-2">
                    {post.content.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block text-xs"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Post Image */}
                {post.content.media && post.content.media.length > 0 && (
                  <div className="bg-gray-100 flex items-center justify-center text-gray-500">
                    <img
                      src={post.content.media[0].url}
                      alt={post.content.media[0].alt}
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
                        <span>{post.engagement.likes}</span>
                      </span>
                      <span>{post.engagement.comments} comments</span>
                      <span>{post.engagement.shares} shares</span>
                      <span>{post.engagement.views} views</span>
                    </div>
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
