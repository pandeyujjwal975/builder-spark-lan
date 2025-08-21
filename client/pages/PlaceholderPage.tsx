import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function PlaceholderPage() {
  const location = useLocation();
  const pageName =
    location.pathname.slice(1).charAt(0).toUpperCase() +
    location.pathname.slice(2);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader className="pb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Construction className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl">
                {pageName} Page Coming Soon
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-600">
                We're working hard to bring you detailed information about our
                school's {pageName.toLowerCase()} section. This page will be
                available soon with comprehensive content.
              </p>
              <p className="text-gray-500">
                In the meantime, feel free to explore other sections of our
                website or contact us directly for any information you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild>
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Want to continue building this page? Simply ask our AI assistant
              to create content for the {pageName.toLowerCase()} section!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
