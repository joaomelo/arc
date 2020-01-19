export default {
  components: {
    controls: {
      wrapper: {
        requiredError: 'Provide value'
      },
      email: {
        email: 'Email',
        placeholder: 'Enter email'
      },
      password: {
        password: 'Password',
        placeholder: 'Enter password'
      },
      select: {
        placeholder: 'Select value | Select values'
      },
      text: {
        placeholder: 'Type value | Types values'
      }
    },
    forms: {
      save: 'Save',
      cancel: 'Cancel'
    }
  },
  modules: {
    i18n: {
      language: 'Language'
    },
    auth: {
      login: 'Login',
      logout: 'Logout from {user}',
      loginError: 'Unable to login'
    },
    profiles: {
      preferences: 'Preferences'
    }
  }
  // collections: {
  //   asset: 'Asset | Assets',
  //   result: 'Result | Results',
  //   challenge: 'Challenge | Challenges',
  //   team: 'Team | Teams'
  // },
  // forms: {
  //   show: 'Show',
  //   hide: 'Hide',
  //   edit: 'Edit',
  //   delete: 'Delete',
  //   new: 'New {col}',
  // },
  // calendar: {
  //   date: 'MM/DD/YYYY'
  // },
  // daterange: {
  //   apply: 'Apply',
  //   cancel: 'Clear',
  //   from: 'From',
  //   to: 'To',
  //   week: 'W',
  //   days: {
  //     su: 'Su',
  //     mo: 'Mo',
  //     tu: 'Tu',
  //     we: 'We',
  //     th: 'Th',
  //     fr: 'Fr',
  //     sa: 'Sa'
  //   },
  //   months: {
  //     jan: 'January',
  //     feb: 'February',
  //     mar: 'March',
  //     apr: 'April',
  //     may: 'May',
  //     jun: 'June',
  //     jul: 'July',
  //     aug: 'August',
  //     sep: 'September',
  //     oct: 'October',
  //     nov: 'November',
  //     dec: 'December'
  //   }
  // },
  // fields: {
  //   common: {
  //     title: 'Title',
  //     description: 'Description',
  //     tags: 'Tags'
  //   },
  //   status: {
  //     status: 'Status',
  //     active: 'active',
  //     blocked: 'blocked',
  //     closed: 'closed'
  //   },
  //   assets: {
  //     alias: 'Alias'
  //   },
  //   results: {
  //     recurrent: 'Recurrent',
  //     period: 'Period'
  //   },
  //   teams: {
  //     parent: 'Parent',
  //     owner: 'Owner',
  //     managers: 'Managers',
  //     staff: 'Staff',
  //     defaultTeam: '{user}"s" team'
  //   }
  // },
};
