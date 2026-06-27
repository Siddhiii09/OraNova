"use client";

import { SignOutButton, SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useAuth();

  return (
    <div>
      <h1>Home page</h1>
      {isSignedIn ? (
        <SignOutButton>Logout</SignOutButton>
      ) : (
        <SignUpButton mode="modal">Sign Up</SignUpButton>
      )}
    </div>
  );
}
