import React, { useState } from 'react';
import { 
  DialogBasic,
  ControlEmail, 
  ControlPassword, 
  PrimaryButton 
} from '__cli/core/components';

function DialogSignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (data: object) => {
    console.log(data);
  }

  return (
    <DialogBasic onSubmit={handleSubmit}>
      <ControlEmail label="Email" value={email} onChange={setEmail} />
      <ControlPassword label="Password" value={email} onChange={setEmail} />
      <PrimaryButton label="Sign In" />
    </DialogBasic>
  )
}

export { DialogSignIn }