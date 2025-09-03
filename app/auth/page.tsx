"use client";
import AuthForm from "./components/AuthForm";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function AuthPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 mt-20">
          <AuthForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}