
import styles from "./login-form.module.css"
import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';
import { Container } from '@mantine/core';


export function LoginForm() {
const containerProps = {
    mx: 'auto',
    p: 'md',
    mt: 'md',}

return <div>
<Container size="xs" className={styles.container}{...containerProps}>
<TextInput
  placeholder="Email"
/>
<TextInput
  placeholder="Password"
/>
<div className={styles.loginbutton}>
<Button variant="filled" >Login</Button>
</div>

</Container>

</div>
}

export default LoginForm