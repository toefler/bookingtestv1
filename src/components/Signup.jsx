import { useState } from "react";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tuqfprlolqdwozasturb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1cWZwcmxvbHFkd296YXN0dXJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDI3MzAsImV4cCI6MjA0NzA3ODczMH0.inEWpMbOf50doEUSLz2mBus1FJirlGvDtrBCJdY3rOU";
const supabase = createClient(supabaseUrl, supabaseKey)

//DETTE ER FOR SIGNUP (CREATE USER)


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUpNewUser() {
    console.log("sending to supabase",email,password)

    const { data, error } = await supabase.auth.signUp(
        { email: email, password: password,
      options: {
        emailRedirectTo: 'https://example.com/welcome',
      },
    })
    console.log("data",data)
    console.log("error",error)
}
  

  const handleSignup = (e) => {
    e.preventDefault(); // Prevents form from refreshing the page
    console.log(email, password);
    // Here you can add async logic for signup (like sending data to a server)
    signUpNewUser()
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default Signup;


//Async betyder at det tager langtid at sende et signal fra én computer til anden. og uden async can vi ikke skrive await funktionen.
//Await funktionen bruger man for at vente på at en promise er fuldført. (jeg er blevet lovet et svar i en promise)