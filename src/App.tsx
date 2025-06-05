import { Toaster } from "@/components/ui/toaster";
import { LoginForm } from "@/components/LoginForm";

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <LoginForm />
      <Toaster />
    </div>
  );
}