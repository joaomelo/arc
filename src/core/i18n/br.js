export default {
  components: {
    controls: {
      wrapper: {
        requiredError: 'Insira valor'
      },
      email: {
        email: 'Email',
        placeholder: 'Digite email'
      },
      password: {
        password: 'Senha',
        placeholder: 'Digite senha'
      }
    }
  },
  modules: {
    i18n: {
      language: 'Idioma'
    },
    auth: {
      login: 'Entrar',
      logout: 'Sair de {user}',
      loginError: 'Erro ao tentar login'
    },
    profiles: {
      preferences: 'Preferências'
    }
  }
  // collections: {
  //   asset: 'Ativo | Ativos',
  //   result: 'Resultado | Resultados',
  //   challenge: 'Desafio | Desafios',
  //   team: 'Time | Times'
  // },
  // forms: {
  //   edit: 'Editar',
  //   delete: 'Excluir',
  //   new: 'Novo {col}',
  //   save: 'Salvar',
  //   cancel: 'Cancelar'
  // },
  // fields: {
  //   common: {
  //     title: 'Título'
  //   },
  //   assets: {
  //     alias: 'Apelido'
  //   },
  //   teams: {
  //     parent: 'Ascendente',
  //     owner: 'Proprietário',
  //     managers: 'Gestores',
  //     staff: 'equipe',
  //     defaultTeam: 'time do {user}'
  //   }
  // }
};
