import React from 'react';
import { ControlGroup } from './control-group';
import { BaseInput } from './base-input';

export const ControlInput = props => <ControlGroup baseControl={BaseInput} {...props} />;
