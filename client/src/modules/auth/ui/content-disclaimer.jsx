import React from 'react';
import { appDescription } from '__com/meta';
import { DialogBase, ArticleBase } from '__cli/core/components';

export const ContentDisclaimer = (props) => {
  return (
    <DialogBase {...props}>
      <ArticleBase>
        <p>{appDescription()}</p>
        <p>This is a personal instance and you are welcome to freely sign up for an account. But since this is a hobby project, i can&apos;t guarantee any service level.</p>
        <p>The most reliable way to use the app is first check the open sourced code in GitHub and when confortable raise your own instance.</p>
      </ArticleBase>
    </DialogBase>
  );
};
