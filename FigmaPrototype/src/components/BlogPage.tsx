import { ThumbsUp, MessageCircle, Share2, MoreHorizontal, TrendingUp, Award, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function BlogPage() {
  const linkedinPosts = [
    {
      id: 1,
      author: {
        name: "Joanna Baran",
        title: "Project Manager at Bridge Medical",
        avatar: "JB",
        verified: true
      },
      content: "🚀 Exciting milestone! We just helped another medical device startup achieve CE marking in record time - just 18 months from concept to market!\n\nThe key to success? Early regulatory strategy and choosing the right notified body. Our team worked closely with the client to:\n\n✅ Define optimal regulatory pathway\n✅ Streamline clinical evidence requirements  \n✅ Navigate post-market surveillance planning\n✅ Ensure seamless quality system implementation\n\nThe device is now improving patient outcomes across European hospitals. This is exactly why we do what we do! 💪\n\n#MedicalDevices #Regulatory #CEMarking #Healthcare #Innovation",
      timeAgo: "2h",
      likes: 47,
      comments: 12,
      shares: 8,
      hasImage: true,
      imageAlt: "Medical device in hospital setting"
    },
    {
      id: 2,
      author: {
        name: "Bridge Medical",
        title: "Medical Consulting • 2,847 followers",
        avatar: "BM",
        verified: true
      },
      content: "🔥 BREAKING: Major changes in Central European reimbursement policies!\n\nPoland's National Health Fund just announced fast-track pathways for breakthrough medical technologies. Meanwhile, Czech Republic and Slovakia are rolling out value-based healthcare models.\n\nWhat does this mean for medical device companies?\n\n📈 Faster market access for innovative solutions\n💰 New funding opportunities through value-based models\n🎯 Better positioning for breakthrough technologies\n⚡ Streamlined approval processes\n\nOur reimbursement team has been working directly with HTA bodies across these markets. The opportunities are massive for companies that understand these new frameworks.\n\nDM us if you need help navigating these changes! 🚀\n\n#Reimbursement #MedicalDevices #Poland #CzechRepublic #Slovakia #HealthTech",
      timeAgo: "1d",
      likes: 89,
      comments: 23,
      shares: 31,
      hasImage: false
    },
    {
      id: 3,
      author: {
        name: "Dr. Martin Svoboda",
        title: "Clinical Research Director at Bridge Medical",
        avatar: "MS",
        verified: false
      },
      content: "💡 How we reduced clinical trial timelines by 30% 📊\n\nJust completed our latest multi-center cardiology study across Poland, Czech Republic, and Slovakia with incredible results!\n\nOur secret sauce:\n\n🎯 Strategic site selection (leveraging our KOL network)\n📋 Enhanced patient identification via EHRs\n⚡ Streamlined regulatory processes \n📈 Continuous adaptive monitoring\n\nThe result? 30% faster study completion AND reduced costs for our client's innovative cardiac device.\n\nPatient recruitment doesn't have to be the bottleneck everyone thinks it is. With the right approach and network, we're proving that European clinical trials can be both fast AND high-quality.\n\nNext up: applying this methodology to orthopedics and wound care trials 🔬\n\n#ClinicalTrials #Cardiology #MedicalResearch #Europe #PatientRecruitment",
      timeAgo: "3d",
      likes: 156,
      comments: 34,
      shares: 67,
      hasImage: true,
      imageAlt: "Clinical trial data charts"
    },
    {
      id: 4,
      author: {
        name: "Bridge Medical",
        title: "Medical Consulting • 2,847 followers",
        avatar: "BM",
        verified: true
      },
      content: "🤖 AI in Medical Devices: European Commission just released new draft guidance!\n\nDigital health is reshaping European healthcare faster than ever. We're seeing incredible innovation in:\n\n🧠 AI-powered diagnostics\n�� Remote patient monitoring\n💊 Digital therapeutics\n⚕️ Software as Medical Devices (SaMD)\n\nBUT... regulatory pathways are complex and market access is unique for digital health.\n\nTraditional HTA methods don't always capture digital value, so we're developing innovative approaches to demonstrate clinical + economic benefits.\n\nOur digital health clients are successfully navigating these challenges because we understand both the tech AND the regulatory landscape.\n\nThe future is digital. The question is: are you ready? 🚀\n\n#DigitalHealth #AIinHealthcare #SaMD #EuropeanRegulation #HealthTech #Innovation",
      timeAgo: "1w",
      likes: 203,
      comments: 45,
      shares: 78,
      hasImage: false
    },
    {
      id: 5,
      author: {
        name: "Anna Kowalski",
        title: "Senior Regulatory Affairs Specialist",
        avatar: "AK",
        verified: false
      },
      content: "🎉 Just witnessed another startup success story!\n\nA revolutionary minimally invasive surgical device went from concept to CE mark in just 18 months. Here's how we made it happen:\n\n🎯 Early regulatory strategy (this is CRUCIAL!)\n🏥 Optimal notified body selection\n📊 Comprehensive clinical evidence generation\n⚖️ Risk management & quality systems\n📈 Post-market surveillance planning\n\nThe magic happened through collaboration between our regulatory team, their engineers, and clinical advisors.\n\nResult? The device is now improving patient outcomes in leading European hospitals! 🏥✨\n\nProof that with the right strategy, even the most complex innovations can achieve efficient regulatory approval.\n\nTo all the medtech startups out there: your innovative ideas CAN become reality faster than you think! 💪\n\n#Regulatory #CEMarking #MedTech #Startup #Surgery #Innovation #Europe",
      timeAgo: "2w",
      likes: 324,
      comments: 87,
      shares: 156,
      hasImage: true,
      imageAlt: "Surgical device in operation"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Latest Updates from Bridge Medical</h1>
          <p className="text-gray-600">
            Follow our team's insights and experiences in European medical device consulting
          </p>
        </div>
      </div>

      {/* LinkedIn-style Posts */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {linkedinPosts.map((post) => (
          <Card key={post.id} className="bg-white">
            <CardContent className="p-0">
              {/* Post Header */}
              <div className="p-4 pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-blue-600 text-white font-semibold">
                        {post.author.avatar}
                      </AvatarFallback>
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
                      <p className="text-sm text-gray-600">{post.author.title}</p>
                      <p className="text-xs text-gray-500">{post.timeAgo} • 🌍</p>
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
                  {post.content}
                </div>
              </div>

              {/* Post Image */}
              {post.hasImage && (
                <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm">{post.imageAlt}</p>
                  </div>
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
                      <span>{post.likes}</span>
                    </span>
                    <span>{post.comments} comments</span>
                    <span>{post.shares} shares</span>
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
                  >
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Like
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex-1 text-gray-600 hover:bg-gray-50"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Comment
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex-1 text-gray-600 hover:bg-gray-50"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Follow Suggestion */}
      <Card className="bg-white">
        <CardContent className="p-4 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Follow Bridge Medical</h3>
          <p className="text-sm text-gray-600 mb-4">
            Stay updated with the latest insights from European medical device consulting
          </p>
          <Button className="w-full">
            + Follow
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}