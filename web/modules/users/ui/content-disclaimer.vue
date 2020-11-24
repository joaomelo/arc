<template>
  <article>
    <!-- <Card {...props}> <ArticleBase> -->
    <p>{{ appDescription }}</p>
    <p>This is a personal instance and you are welcome to freely sign up for an account. But since this is a hobby project, i can&apos;t guarantee any service level.</p>
    <p>The most reliable way to use the app is first check the open sourced code in GitHub and when confortable raise your own instance.</p>
    <router-link :to="{name: 'home'}">
      Go to Home
    </router-link>
    <!-- </ArticleBase> </Card> -->
  </article>
</template>

<script>
import { appDescription } from '@/core/meta';

export default {
  name: 'ContentDisclaimer',
  data () {
    return {
      appDescription: appDescription()
    };
  }
};
</script>
