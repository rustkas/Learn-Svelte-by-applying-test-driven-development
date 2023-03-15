<script>
  let disabled = true;
  let password;
  let passwordRepeat;
  $: disabled = (password && passwordRepeat) ? password !== passwordRepeat : true;

</script>

<h1>Sign Up</h1>
<label for="username">Username</label>
<input id="username"/>
<label for="e-mail">E-mail</label>
<input id="e-mail"/>
<label for="password">Password</label>
<input id="password" type="password" on:input={(event) => password = event.target.value}/>
<label for="password-repeat">Password Repeat</label>
<input id="password-repeat" type="password" on:input={(event) => passwordRepeat = event.target.value}/>
<button {disabled}>Sign Up</button>