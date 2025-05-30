import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { Card, CardContent } from "./components/ui/card";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "./components/ui/select";
import { Sparkles, ClipboardList, RefreshCw, Map } from "lucide-react";

export default function LearningMELPlatform() {
  const [preAnswer, setPreAnswer] = useState("");
  const [selectedOutcome, setSelectedOutcome] = useState("");
  const [reflectionType, setReflectionType] = useState("insight");
  const [outcomeReflection, setOutcomeReflection] = useState("");
  const [reflectorName, setReflectorName] = useState("");
  const [zoneOfInfluence, setZoneOfInfluence] = useState("");
  const [forceFieldDrivers, setForceFieldDrivers] = useState("");
  const [forceFieldBarriers, setForceFieldBarriers] = useState("");
  const [postAnswer, setPostAnswer] = useState("");
  const [peerWall, setPeerWall] = useState([]);

  const outcomeReflections = {
    expand: {
      insight: "🌍 What idea or moment made you go 'Ah-ha!'? How does it help you see an old challenge differently?",
      story: "🌍 Share a story where you began reframing a challenge after this insight.",
      commitment: "🌍 What mindset shift do you want to nurture going forward?"
    },
    complexity: {
      insight: "💡 What complexity or contradiction stood out to you? How did it shift your understanding?",
      story: "💡 Describe a moment when engaging with complexity changed your perspective.",
      commitment: "💡 How can you become more comfortable working with ambiguity?"
    },
    trust: {
      insight: "🧱 When did you notice trust being built in this space?",
      story: "🧱 Tell a story about trust in your work.",
      commitment: "🧱 What will you do to strengthen collaboration?"
    },
    adaptation: {
      insight: "🦎 What hands-on experience helped you learn? Why did it stick?",
      story: "🦎 Describe a moment where learning-by-doing made a difference.",
      commitment: "🦎 What practice will you try to adapt based on what you learned?"
    },
    agency: {
      insight: "✍️ What commitment do you feel empowered to make?",
      story: "✍️ Tell a story about when you influenced change.",
      commitment: "✍️ What step will you take to own the outcome?"
    }
  };

  const handleAddToPeerWall = () => {
    if (outcomeReflection && reflectorName) {
      setPeerWall([...peerWall, { name: reflectorName, text: outcomeReflection }]);
      setOutcomeReflection("");
    }
  };

  return (
    <div className="p-8 space-y-10 bg-gray-50 text-gray-900 font-sans max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold flex items-center gap-3 text-esf-blue">
        <Sparkles className="w-8 h-8" /> Learning Cycle Engagement Hub
      </h1>
      <Tabs defaultValue="pre">
        <TabsList className="grid grid-cols-4 w-full bg-esf-lime text-black rounded-lg p-1 shadow">
          <TabsTrigger value="pre" className="rounded-md"> <ClipboardList className="inline-block mr-1" /> Pre-Engage</TabsTrigger>
          <TabsTrigger value="direct" className="rounded-md"> <Sparkles className="inline-block mr-1" /> Direct Engage</TabsTrigger>
          <TabsTrigger value="post" className="rounded-md"> <RefreshCw className="inline-block mr-1" /> Re-Engage</TabsTrigger>
          <TabsTrigger value="systems" className="rounded-md"> <Map className="inline-block mr-1" /> Systems Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="pre" className="mt-6">
          <Card><CardContent>
            <label>What are you most curious about in this session?</label>
            <Textarea value={preAnswer} onChange={(e) => setPreAnswer(e.target.value)} />
            <Button onClick={() => alert("Saved!")}>Submit</Button>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="direct" className="mt-6">
          <Card><CardContent>
            <label>Choose a Learning Outcome</label>
            <Select onValueChange={setSelectedOutcome}>
              <SelectTrigger>{selectedOutcome || "Select an outcome"}</SelectTrigger>
              <SelectContent>
                <SelectItem value="expand">Expand Mindsets</SelectItem>
                <SelectItem value="complexity">Engage Complexity</SelectItem>
                <SelectItem value="trust">Build Trust</SelectItem>
                <SelectItem value="adaptation">Adapt Continuously</SelectItem>
                <SelectItem value="agency">Strengthen Agency</SelectItem>
              </SelectContent>
            </Select>

            <label>Type of Reflection</label>
            <Select onValueChange={setReflectionType}>
              <SelectTrigger>{reflectionType}</SelectTrigger>
              <SelectContent>
                <SelectItem value="insight">Insight</SelectItem>
                <SelectItem value="story">Story</SelectItem>
                <SelectItem value="commitment">Commitment</SelectItem>
              </SelectContent>
            </Select>

            {selectedOutcome && (
              <>
                <p>{outcomeReflections[selectedOutcome][reflectionType]}</p>
                <Textarea value={outcomeReflection} onChange={(e) => setOutcomeReflection(e.target.value)} />
                <input value={reflectorName} onChange={(e) => setReflectorName(e.target.value)} placeholder="Your name" />
                <Button onClick={handleAddToPeerWall}>Share</Button>
              </>
            )}
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="post" className="mt-6">
          <Card><CardContent>
            <label>What changes have you noticed in your practice?</label>
            <Textarea value={postAnswer} onChange={(e) => setPostAnswer(e.target.value)} />
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="systems" className="mt-6">
          <Card><CardContent>
            <label>Zone of Influence</label>
            <Textarea value={zoneOfInfluence} onChange={(e) => setZoneOfInfluence(e.target.value)} />
            <label>Force Field Analysis - Drivers</label>
            <Textarea value={forceFieldDrivers} onChange={(e) => setForceFieldDrivers(e.target.value)} />
            <label>Force Field Analysis - Barriers</label>
            <Textarea value={forceFieldBarriers} onChange={(e) => setForceFieldBarriers(e.target.value)} />
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
