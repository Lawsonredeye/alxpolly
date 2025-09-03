'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useRouter } from 'next/navigation';

const polls = [
  {
    id: 1,
    title: "What's your favorite programming language?",
    options: ["JavaScript", "Python", "TypeScript", "Other"],
    votes: [120, 95, 80, 30],
  },
  {
    id: 2,
    title: "Which frontend framework do you prefer?",
    options: ["React", "Vue", "Angular", "Svelte"],
    votes: [150, 70, 45, 60],
  },
  {
    id: 3,
    title: "Tabs or Spaces?",
    options: ["Tabs", "Spaces"],
    votes: [50, 250],
  },
];

export default function PollsPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
      }
    };
    getSession();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          {user && (
            <div className="mb-8">
              <h1 className="text-xl font-bold text-center sm:text-left">
                Welcome, {user.email}
              </h1>
            </div>
          )}
          <h1 className="text-3xl font-extrabold mb-8 text-center">
            Available Polls
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {polls.map((poll) => (
              <Card key={poll.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{poll.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {poll.options.map((option, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span>{option}</span>
                        <span className="font-semibold">
                          {poll.votes[index]} votes
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Vote</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}