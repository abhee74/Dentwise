import { Show, SignOutButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>

      <Show when="signed-out">
        <SignUpButton mode="modal">
          <button>Sign Up</button>
        </SignUpButton>
      </Show>

      <Show when="signed-in">
        <SignOutButton>
          <button>Logout</button>
        </SignOutButton>
      </Show>
    </div>
  );
}