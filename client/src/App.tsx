import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import SubprimeLanding from "./pages/SubprimeLanding";
import PrimeLanding from "./pages/PrimeLanding";
import CreditEducation from "./pages/CreditEducation";
import AdminDashboard from "./pages/AdminDashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FCRADisclosure from "./pages/FCRADisclosure";
import BadCreditFunnel from "./pages/BadCreditFunnel";
import TradeInFunnel from "./pages/TradeInFunnel";
import FirstTimeBuyerFunnel from "./pages/FirstTimeBuyerFunnel";
import PlatformImprovements from "./pages/PlatformImprovements";
import { DealerRegister } from "./pages/DealerRegister";
import { DealerDashboard } from "./pages/DealerDashboard";
import { DealerMarketplace } from "./pages/DealerMarketplace";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/apply" component={Apply} />
      <Route path="/subprime" component={SubprimeLanding} />
      <Route path="/prime" component={PrimeLanding} />
      <Route path="/credit-education" component={CreditEducation} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/fcra-disclosure" component={FCRADisclosure} />
      <Route path="/bad-credit" component={BadCreditFunnel} />
      <Route path="/trade-in" component={TradeInFunnel} />
      <Route path="/first-time-buyer" component={FirstTimeBuyerFunnel} />
      <Route path="/platform-improvements" component={PlatformImprovements} />
      <Route path="/dealer/register" component={DealerRegister} />
      <Route path="/dealer/dashboard" component={DealerDashboard} />
      <Route path="/dealer/marketplace" component={DealerMarketplace} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
