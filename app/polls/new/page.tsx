import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function NewPollPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg space-y-8">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-extrabold">
                Create a new poll
              </CardTitle>
              <CardDescription>
                Fill out the details below to create your poll.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="question">Poll Question</Label>
                  <Input id="question" placeholder="What do you want to ask?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="option1">Option 1</Label>
                  <Input id="option1" placeholder="First option" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="option2">Option 2</Label>
                  <Input id="option2" placeholder="Second option" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="option3">Option 3</Label>
                  <Input id="option3" placeholder="Third option (optional)" />
                </div>
                <Button variant="outline" className="w-full">
                  Add another option
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Create Poll</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
