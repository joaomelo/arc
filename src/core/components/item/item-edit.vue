<template>
  <FormDialog
    @save="save"
    @cancel="cancel"
  >
    <slot :item="item" />
  </FormDialog>
</template>

<script>
import { cloneDeep } from 'lodash-es';
import { p } from '@/common/components-helpers';
import { FormDialog } from '../forms';

const ITEM_EDIT_STATES = {
  ADDING: Symbol('ITEM_EDIT_STATES.ADDING'),
  EDITING: Symbol('ITEM_EDIT_STATES.EDITING')
};

export default {
  name: 'ItemEdit',
  components: {
    FormDialog
  },
  props: {
    // is better to receive the id and fetch, add and edit actions instead of the item object,
    // so this component can DRY the logic for adding versus editing in every edit form
    itemId: p(String),
    fetchAction: p(Function),
    addAction: p(Function),
    updateAction: p(Function)
  },
  data () {
    return {
      item: this.state === ITEM_EDIT_STATES.ADDING ? {} : cloneDeep(this.fetchAction(this.itemId))
    };
  },
  computed: {
    state () {
      const state = this.itemId === 'add' ? ITEM_EDIT_STATES.ADDING : ITEM_EDIT_STATES.EDITING;
      return state;
    }
  },
  methods: {
    cancel () {
      this.$router.go(-1);
    },
    save () {
      const action = (this.state === ITEM_EDIT_STATES.ADDING) ? this.addAction : this.updateAction;
      action(this.item);
      this.$router.go(-1);
    }
  }
};
</script>
