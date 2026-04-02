import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Platform
import IntelligencePlatform from "./pages/platform/IntelligencePlatform.tsx";
import MacTaxAI from "./pages/platform/MacTaxAI.tsx";
import SBuS from "./pages/platform/SBuS.tsx";
import SkillPassport from "./pages/platform/SkillPassport.tsx";

// Solutions
import AIAccounting from "./pages/solutions/AIAccounting.tsx";
import EnterpriseIT from "./pages/solutions/EnterpriseIT.tsx";
import StaffAugmentation from "./pages/solutions/StaffAugmentation.tsx";
import StrategicAdvisory from "./pages/solutions/StrategicAdvisory.tsx";
import ProcessAutomation from "./pages/solutions/ProcessAutomation.tsx";

// AI Engine
import AIArchitecture from "./pages/ai-engine/AIArchitecture.tsx";
import DecisionIntelligence from "./pages/ai-engine/DecisionIntelligence.tsx";
import DataSecurity from "./pages/ai-engine/DataSecurity.tsx";
import Research from "./pages/ai-engine/Research.tsx";

// About
import About from "./pages/about/About.tsx";
import Vision from "./pages/about/Vision.tsx";
import Leadership from "./pages/about/Leadership.tsx";
import Careers from "./pages/about/Careers.tsx";
import Partnerships from "./pages/about/Partnerships.tsx";

// Resources
import Insights from "./pages/resources/Insights.tsx";
import CaseStudies from "./pages/resources/CaseStudies.tsx";
import Whitepapers from "./pages/resources/Whitepapers.tsx";
import Blog from "./pages/resources/Blog.tsx";
import Events from "./pages/resources/Events.tsx";

import BookDemo from "./pages/BookDemo.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Platform */}
          <Route path="/platform/intelligence-platform" element={<IntelligencePlatform />} />
          <Route path="/platform/mactax-ai" element={<MacTaxAI />} />
          <Route path="/platform/sbus" element={<SBuS />} />
          <Route path="/platform/skill-passport" element={<SkillPassport />} />

          {/* Solutions */}
          <Route path="/solutions/ai-accounting" element={<AIAccounting />} />
          <Route path="/solutions/enterprise-it" element={<EnterpriseIT />} />
          <Route path="/solutions/staff-augmentation" element={<StaffAugmentation />} />
          <Route path="/solutions/strategic-advisory" element={<StrategicAdvisory />} />
          <Route path="/solutions/process-automation" element={<ProcessAutomation />} />

          {/* AI Engine */}
          <Route path="/ai-engine/architecture" element={<AIArchitecture />} />
          <Route path="/ai-engine/decision-intelligence" element={<DecisionIntelligence />} />
          <Route path="/ai-engine/data-security" element={<DataSecurity />} />
          <Route path="/ai-engine/research" element={<Research />} />

          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/about/partnerships" element={<Partnerships />} />

          {/* Resources */}
          <Route path="/resources/insights" element={<Insights />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/whitepapers" element={<Whitepapers />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/events" element={<Events />} />

          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
