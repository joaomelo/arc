export default {
  collections: {
    asset: 'Asset | Assets',
    result: 'Result | Results',
    challenge: 'Challenge | Challenges',
    team: 'Team | Teams'
  },
  nav: {
    account: 'Account',
    logout: 'Logout from {user}'
  },
  forms: {
    show: 'Show',
    hide: 'Hide',
    edit: 'Edit',
    delete: 'Delete',
    new: 'New {col}',
    save: 'Save',
    cancel: 'Cancel'
  },
  fields: {
    common: {
      title: 'Title',
      description: 'Description',
      tags: 'Tags'
    },
    account: {
      email: 'Email',
      language: 'Language'
    },
    assets: {
      alias: 'Alias',
      status: {
        status: 'Status',
        active: 'active',
        blocked: 'blocked',
        closed: 'closed'
      }
    },
    teams: {
      parent: 'Parent',
      owner: 'Owner',
      managers: 'Managers',
      staff: 'Staff'
    }
  },
  placeholders: {
    select: 'Please select a value'
  },
  error: {
    required: 'Please provide a valid value'
  }
};
