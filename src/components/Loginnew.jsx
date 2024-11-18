import { useState } from "react";
import { createClient } from '@supabase/supabase-js';
import { PasswordInput, TextInput } from '@mantine/core';
import { Button } from '@mantine/core';
import { Container } from '@mantine/core';
import styles from "./login-form.module.css"


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
  const containerProps = {
    mx: 'auto',
    p: 'md',
    mt: 'md',}
//1. gemme info på brugeren 
const userInfo ={
  email,
}

// context.setUserInfo(userInfo)
// Siden ændrer sig, redirecter til /index :) 


  return (
    <Container size="xs" className={styles.container}{...containerProps}>
      <h1>Login</h1>
      <form onSubmit={handleSignin}>
      <TextInput
   type="text"
   placeholder="Email"
   value={email}
   onChange={(e) => setEmail(e.target.value)}
/>

<PasswordInput
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
/>

<div className={styles.loginbutton}>
<Button type="submit" >Login</Button>
</div>
      </form>
    </Container>
  );
}

export default Signin;
