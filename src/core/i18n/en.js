export default {
  collections: {
    asset: 'Asset | Assets',
    result: 'Result | Results',
    challenge: 'Challenge | Challenges',
    team: 'Team | Teams'
  },
  nav: {
    account: 'Account'
  },
  forms: {
    show: 'Show',
    hide: 'Hide',
    edit: 'Edit',
    delete: 'Delete',
    new: 'New {col}',
    save: 'Save',
    login: 'Login',
    cancel: 'Cancel'
  },
  placeholders: {
    select: 'Please select a value | Please select some values',
    enter: 'Please enter a value | Please enter some values',
    email: 'Please enter a email',
    password: 'Please enter password'
  },
  calendar: {
    date: 'MM/DD/YYYY'
  },
  daterange: {
    apply: 'Apply',
    cancel: 'Clear',
    from: 'From',
    to: 'To',
    week: 'W',
    days: {
      su: 'Su',
      mo: 'Mo',
      tu: 'Tu',
      we: 'We',
      th: 'Th',
      fr: 'Fr',
      sa: 'Sa'
    },
    months: {
      jan: 'January',
      feb: 'February',
      mar: 'March',
      apr: 'April',
      may: 'May',
      jun: 'June',
      jul: 'July',
      aug: 'August',
      sep: 'September',
      oct: 'October',
      nov: 'November',
      dec: 'December'
    }
  },
  fields: {
    common: {
      title: 'Title',
      description: 'Description',
      tags: 'Tags'
    },
    status: {
      status: 'Status',
      active: 'active',
      blocked: 'blocked',
      closed: 'closed'
    },
    account: {
      email: 'Email',
      language: 'Language'
    },
    assets: {
      alias: 'Alias'
    },
    results: {
      recurrent: 'Recurrent',
      period: 'Period'
    },
    teams: {
      parent: 'Parent',
      owner: 'Owner',
      managers: 'Managers',
      staff: 'Staff',
      defaultTeam: '{user}"s" team'
    }
  },
  errors: {
    required: 'Please provide a valid value',
    login: 'Unable to login'
  },
  modules: {
    auth: {
      logout: 'Logout from {user}'
    }
  }
};