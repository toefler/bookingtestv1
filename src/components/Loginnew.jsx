import { useState } from "react";
import { createClient } from '@supabase/supabase-js';

//DETTE ER LOG IN ""

// Initialize Supabase client
const supabaseUrl = 'https://tuqfprlolqdwozasturb.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1cWZwcmxvbHFkd296YXN0dXJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDI3MzAsImV4cCI6MjA0NzA3ODczMH0.inEWpMbOf50doEUSLz2mBus1FJirlGvDtrBCJdY3rOU";  // For security, avoid exposing this in production
const supabase = createClient(supabaseUrl, supabaseKey);

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signInWithEmail() {
    console.log("sending to supabase", email, password);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
      options: {
        emailRedirectTo: 'https://example.com/welcome',
      },
    });

    console.log("data", data);
    console.log("error", error);
  }

  const handleSignin = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmail();
  };

  return (
    <div>
      <form onSubmit={handleSignin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Signin;
